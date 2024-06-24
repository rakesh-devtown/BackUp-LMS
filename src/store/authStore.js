import { create } from "zustand";
import { message, notification } from "antd";
import { serviceDelete, serviceGet, servicePost } from "../utils/api";
import { deleteHeader, setHeader } from "../utils/header";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { devtools } from "zustand/middleware";
import { useNavigate } from "react-router-dom";
import loginUiStore from "./loginUi.store";
import useBatchStore from "./batchStore";

const useAuthStore = create(
  devtools((set) => ({
    token: localStorage.getItem("token") ? (localStorage.getItem("token")) : null,
    chatToken: localStorage.getItem("chatToken") ? (localStorage.getItem("chatToken")) : null,
    isAuthenticated: false,
    isGoogleAuthenticated: false,
    user: null,
    isReady: false,
    isTokenValid: false,
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

    setProfileImage: async (file,user) => {
      try{
        const response = await servicePost(`student/student/v1/me/update-photo?uId=${user.id}`, 
          {
            profilePic: file
          },);
          set({
            user: {
              ...user,
              profilePic: file
            }
          })
        notification.success({ message: "Success", description: "Profile Picture Updated" });
      }catch(err)
      {
        notification.error({ message: "Error", description: err.message });
      }
    },

    login: async (values) => {
      try {
        const fp = await FingerprintJS.load();
        const { visitorId, components: { platform: { value } } } = await fp.get();

        const res = await servicePost("auth/auth/v1/login", {
          ...values,
          signature: visitorId,
          platform: value
        },);
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
          setHeader("Authorization", `bearer ${token}`);
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
            setHeader("Authorization", `bearer ${token}`);
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
        deleteHeader("Authorization");
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
          setHeader("Authorization", `bearer ${token}`);
          set({ token, chatToken, user, isGoogleAuthenticated: true, isAuthenticated: true });
        } else {
          // message.error(message, { duration: 4000 });
          if (message === "Too many active sessions") {
            setHeader("Authorization", `bearer ${token}`);
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
        deleteHeader("Authorization");

      }
    },
    registerUserSession: async () => {
      try {
        const tokenn = localStorage.getItem("token");
        const fp = await FingerprintJS.load();
        const { visitorId, components } = await fp.get();
        // TODO: Change verify magic link to verify Authorization token url
        if (tokenn === null) {
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
          setHeader("Authorization", `bearer ${token}`);
          setHeader("signature", visitorId);
          localStorage.setItem("token", token);
          localStorage.setItem("chatToken", chatToken)
          set({
            token,
            chatToken,
            user,
            isAuthenticated: true,
            isGoogleAuthenticated: true,
            isTokenValid: true,
          });

          //console.log("token is verified");
          await useBatchStore.getState().getAllEnrolledCourses(true);
          return success;

        } else {
          deleteHeader("Authorization");
          notification.error({ message: "Login Error", description: message });
          if (message === "Too many active sessions") {
            localStorage.setItem("token", token);
            setHeader("Authorization", `bearer ${token}`);
            set({
              token: '',
              chatToken,
              user,
              isAuthenticated: false,
              screenLimitReached: true,
            });
          } else {
            localStorage.removeItem("token");
            deleteHeader("Authorization");
            set({
              token: null,
              chatToken: null,
              user: null,
              isAuthenticated: false,
            });
          }

        }
      } catch (error) {
        deleteHeader("Authorization");
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
    loadUser: async () => {
      try {
        const tokenn = localStorage.getItem("token");
        console.log(tokenn)
        const fp = await FingerprintJS.load();
        const { visitorId, components } = await fp.get();
        // TODO: Change verify magic link to verify Authorization token url
        if (tokenn === null) {
          return false;
        }
        const {
          data: { user, token, chatToken },
          message,
          success,
        } = await serviceGet(
          `auth/auth/v1/verify-auth?token=${tokenn}&signature=${visitorId}&platform=${components.platform.value}`
        );

        console.log("Token is Verified")
        console.log(success)
        if (success) {
          setHeader("Authorization", `bearer ${token}`);
          setHeader("signature", visitorId);
          localStorage.setItem("token", token);
          localStorage.setItem("chatToken", chatToken)
          console.log("Token is Verified")
          set({
            token,
            chatToken,
            user,
            isAuthenticated: true,
            isGoogleAuthenticated: true,
          });
          
          //await useBatchStore.getState().getAllEnrolledCourses(true);
          set({isTokenValid:true})

        } else {
          deleteHeader("Authorization");
          notification.error({ message: "Login Error", description: message });
          if (message === "Too many active sessions") {
            localStorage.setItem("token", token);
            setHeader("Authorization", `bearer ${token}`);
            set({
              token: '',
              chatToken,
              user,
              isAuthenticated: false,
              screenLimitReached: true,
            });
          } else {
            localStorage.removeItem("token");
            deleteHeader("Authorization");
            set({
              token: null,
              chatToken: null,
              user: null,
              isAuthenticated: false,
            });
          }

        }
      } catch (error) {
        deleteHeader("Authorization");
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
    logout: async () => {
      try {
        const fp = await FingerprintJS.load();
        const { visitorId, components } = await fp.get();
        const { success, message } = await serviceDelete(
          `student/student/v1/screen?signature=${visitorId}`
        );

        localStorage.removeItem("token");
        deleteHeader("Authorization");
        set({
          token: null,
          chatToken: null,
          user: null,
          isAuthenticated: false,
          isGoogleAuthenticated: false,
        });
      } catch (err) {
        deleteHeader("Authorization");
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
    async forgotPassword(value) {
      try {

        const res = await servicePost(
          "auth/auth/v1/forgot-password",
          { email: value}
        );
        const { success, message } = res;
        notification.success({ message: "Success", description: message });
        return true;
      } catch (error) {
        notification.error({ message: "Error", description: error.message });
        return false;
      }
    },

    async otpVerify(otp,email) {
      try {

        const res = await servicePost(
          "auth/auth/v1/verify-otp",
          { otp, email }
        );
        const { success, message, data } = res;

        if (success) {
          notification.success({ message: "Success", description: message });
          localStorage.setItem('token', data.token);
          return true;
        } else {
          notification.error({ message: "Error", description: message });
          return false;
        }
      } catch (error) {
        return false;
        notification.error({ message: "Error", description: error.message });
      }
    },

    //reset password code
    async resetPassword(password) {
        try {

          const otp = loginUiStore?.getState().currentOtp;
          const email = loginUiStore?.getState().currentUserEmail;
          console.log(otp, email);

          const res = await servicePost(
            `auth/auth/v1/reset-password?otp=${otp}&email=${email}`,
            { password: password }
          );
          const { success, message } = res;
          if (success) {
            notification.success({
              message: "Success",
              description: message,
            });
            return true;
          } else {
            const [err] = res.data.errors;
            err.param === "token"
              ? notification.error({
                message: "Error",
                description: message,
              })
              : notification.error({ message: "Error", description: message });
              return false;
          }
        } catch (error) {
          notification.error({ message: "Error", description: error.message });
          return false;
        }
    },
    async verifyMagicLink({ token, setIsDataLoaded }) {
      const VerificationToken = token;
      try {
        const fp = await FingerprintJS.load();
        const { visitorId, components } = await fp.get();

        const res = await servicePost(`auth/auth/v1/verify-magic-link?token=${VerificationToken}`, { signature: visitorId, platform: components.platform.value });
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
          setHeader('Authorization', `bearer ${token}`);
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
        if (message === 'Too many active sessions') {
          localStorage.setItem('token', token);

          setHeader('Authorization', `bearer ${token}`);
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
        deleteHeader('Authorization');
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
