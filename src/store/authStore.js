import { create } from "zustand";
import { message, notification } from "antd";
import { serviceDelete, serviceGet, servicePost } from "../utils/api";
import { deleteHeader, setHeader } from "../utils/header";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { devtools } from "zustand/middleware";
import { useNavigate } from "react-router-dom";

const useAuthStore = create(
  devtools((set) => ({
    token: localStorage.getItem("token")? (localStorage.getItem("token")) : null ,
    chatToken: localStorage.getItem("chatToken")? (localStorage.getItem("chatToken")) : null,
    isAuthenticated: false,
    isGoogleAuthenticated: false,
    user: null,
    isReady: false,
    screenLimitReached: false,
    load: false,

    reset: (token, chatToken, user) => {
      set({
        token,
        chatToken,
        user,
        isAuthenticated: true,
        isGoogleAuthenticated: true,
      });
    },

    login: async (values) => {
      try {
        const fp = await FingerprintJS.load();
        const { visitorId, components: { platform: { value } } } = await fp.get();
        
        const res = await servicePost("auth/auth/v1/login", {
          ...values,
          signature: visitorId,
          platform: value
        }, );
        const {
          data: { user, token, chatToken },
          message,
          success,
        } = res;
        if (success) {
          set({
            user
          })
          notification.success({
            message: "Login Success",
            description: `Hey ${user.name} Welcome back`,
          });

          // message.success(`Hey ${user.firstName} Welcome back`, { duration: 4000 });
          localStorage.setItem("token", token);
          localStorage.setItem("chatToken", chatToken);
          setHeader("signature", visitorId);
          setHeader("auth", `bearer ${token}`);
          useAuthStore.getState().reset(token, chatToken, user);
          set({
            token,
            chatToken,
            user,
            isAuthenticated: true,
            isGoogleAuthenticated: false,
          
          })
        } else {

          notification.error({ message: "Login Error", description: message });
          if (message === "Too many active sessions") {
            localStorage.setItem("token", token);
            setHeader("auth", `bearer ${token}`);
            set({
              token,
              chatToken,
              user,
              isAuthenticated: false,
              screenLimitReached: true,
            });
          } else {
            set({
              token: null,
              chatToken: null,
              user: null,
              isAuthenticated: false,
            });
          }
        }
      } catch (error) {
        deleteHeader("auth");
        notification.error({
          message: "Login Error",
          description: "An error occurred during login",
        });

        set({
          token: null,
          chatToken: null,
          user: null,
          isAuthenticated: false,
        });
      }
    },

    googleLogin: async (credential) => {
      try {
        const fp = await FingerprintJS.load();
        const { visitorId, components: { platform: { value } } } = await fp.get();
        const res = await servicePost(
          "auth/auth/v1/google/login",
          { credential: credential, signature: visitorId, platform: value }
        );
        const {
          data: { user, token, chatToken },
          message,
          success,
        } = res;
        if (success) {
          const { firstName = "", lastName = "", email = "" } = user;
          // message.success(`Hey ${firstName} Welcome back`, { duration: 4000 });
          localStorage.setItem("token", token);
          localStorage.setItem("chatToken", chatToken);
          setHeader("signature", visitorId);
          setHeader("auth", `bearer ${token}`);
          set({ token, chatToken, user, isGoogleAuthenticated: true, isAuthenticated : true });
        } else {
          // message.error(message, { duration: 4000 });
          if (message === "Too many active sessions") {
            setHeader("auth", `bearer ${token}`);
            set({
              token,
              chatToken,
              user,
              isAuthenticated: false,
              screenLimitReached: true,
            });
            
          } else {
            set({
              token: null,
              chatToken: null,
              user: null,
              isGoogleAuthenticated: false,
            });
          }
        }
      } catch (error) {
        deleteHeader("auth");

      }
    },
    loadUser: async () => {
      try {
        const tokenn = localStorage.getItem("token");
        const fp = await FingerprintJS.load();
        const { visitorId, components } = await fp.get();
        // TODO: Change verify magic link to verify auth token url
        if(tokenn === null) {
          return false;
        }
        const {
          data: { user, token, chatToken },
          message,
          success,
        } = await serviceGet(
          `auth/auth/v1/verify-auth-token?token=${tokenn}&signature=${visitorId}&platform=${components.platform.value}`
        );
        if (success) {
          setHeader("auth", `bearer ${token}`);
          setHeader("signature", visitorId);
          localStorage.setItem("token", token);
          localStorage.setItem("chatToken", chatToken)
          set({
            token,
            chatToken,
            user,
            isAuthenticated: true,
            isGoogleAuthenticated: true,
          });
          return success; 

        } else {
          deleteHeader("auth");
          notification.error({ message: "Login Error", description: message });
          if (message === "Too many active sessions") {
            localStorage.setItem("token", token);
            setHeader("auth", `bearer ${token}`);
            set({
              token:'',
              chatToken,
              user,
              isAuthenticated: false,
              screenLimitReached: true,
            });
           
          } else {
            set({
              token: null,
              chatToken: null,
              user: null,
              isAuthenticated: false,
            });
          }
  
        }
      } catch (error) {
        deleteHeader("auth");
        set({
          token: null,
          chatToken: null,
          user: null,
          isAuthenticated: false,
          isGoogleAuthenticated: false,
        });
        return false;
      }
    },
    logout: async() => {
      try{
        const fp = await FingerprintJS.load();
        const { visitorId, components } = await fp.get();
        const { success, message } = await serviceDelete(
          `student/student/v1/screen?signature=${visitorId}`
        );
  
        localStorage.removeItem("token");
        deleteHeader("auth");
        set({
          token: null,
          chatToken: null,
          user: null,
          isAuthenticated: false,
          isGoogleAuthenticated: false,
        });
      }catch(err)
      {
        deleteHeader("auth");
        set({
          token: null,
          chatToken: null,
          user: null,
          isAuthenticated: false,
          isGoogleAuthenticated: false,
        });
        return false;
      }

    },
    clearSessions: () => {
      set({
        screenLimitReached: false,
        isGoogleAuthenticated: true,
        isAuthenticated: true,
      });
    },
    async forgotPassword(values) {
      try {
        
        const res = await servicePost(
          "auth/auth/v1/forgot-password",
          { ...values, callbackUrl: "https://www.student-platform.devtown.in" }
        );
        const { success, message } = res;
        notification.success({ message: "Success", description: message });   
        return true;

        if (success != false) {
          notification.success({ message: "Success", description: message });
        } else {
          notification.error({ message: "Error", description: message });
        }
      } catch (error) {
        notification.error({ message: "Error", description: error.message });
      }
    },

    //reset password code
    async resetPassword(values, token) {
      if (token != null) {
        try {
          const res = await servicePost(
            `auth/auth/v1/reset-password?token=${token}`,
            { password: values }
          );
          const { success, message } = res;
          if (success) {
            return notification.success({
              message: "Success",
              description: message,
            });
          } else {
            const [err] = res.data.errors;
            return err.param === "token"
              ? notification.error({
                  message: "Error",
                  description:
                    "Your invite has expired !! Reset password via Forget Password link",
                })
              : notification.error({ message: "Error", description: "Error" });
          }
        } catch (error) {
          notification.error({ message: "Error", description: error.message });
        }
      }
    },
    async verifyMagicLink({token , setIsDataLoaded}) {
      const VerificationToken =token;
      try {
          const fp = await FingerprintJS.load();
          const { visitorId , components } = await fp.get();
          
          const res = await servicePost(`auth/auth/v1/verify-magic-link?token=${VerificationToken}`, {  signature: visitorId , platform : components.platform.value});
          const { data: { user, token, chatToken }, message, success } = res;
          setIsDataLoaded(message)
       
          if (success) {
              const { firstName = '', lastName = '', email = '' } = user;
              notification.success({
                  message: 'Success',
                  description: message,
              });
              
              // Store token
              localStorage.setItem('token', token);
              setHeader('signature', visitorId);
              // Set the header
              setHeader('auth', `bearer ${token}`);
              set({
                token,
                chatToken,
                user,
                isAuthenticated: true,
                isGoogleAuthenticated: true,
              });
              return {
                  token,
                  chatToken,
                  user: { ...user },
                  isAuthenticated: true
              };
          }
          notification.error({
              message: 'Error',
              description: message,
          });
          if(message==='Too many active sessions'){
              localStorage.setItem('token', token);
  
              setHeader('auth', `bearer ${token}`);
              return {
                  token,
                  chatToken,
                  user: { ...user },
                  isAuthenticated: false,
                  screenLimitReached: true
              };
          }
          
          return {
              token: null,
              chatToken: null,
              user: null,
              isAuthenticated: false
          };
      } catch (error) {
          deleteHeader('auth');
          deleteHeader();
          return {
              token: null,
              chatToken: null,
              user: null,
              isAuthenticated: false
          };
      }



    }
  }))
);
export default useAuthStore;
