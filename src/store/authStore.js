import { create } from "zustand";
import { message, notification } from "antd";
import { serviceGet, servicePost } from "../utils/api";
import { deleteHeader, setHeader } from "../utils/header";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { devtools } from "zustand/middleware";

const useAuthStore = create(
  devtools((set) => ({
    token: null,
    chatToken: null,
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
        const { visitorId } = await fp.get();
        const res = await servicePost("auth/auth-api/v1/login?type=student", {
          ...values,
          signature: visitorId,
        });
        const {
          data: { user, token, chatToken },
          message,
          success,
        } = res;
        if (success) {
          console.log("success: true");
          notification.success({ message: 'Login Success', description: `Hey ${user.firstName} Welcome back` });

          // message.success(`Hey ${user.firstName} Welcome back`, { duration: 4000 });
          localStorage.setItem("token", token);
          setHeader("signature", visitorId);
          setHeader("auth", `bearer ${token}`);
          useAuthStore.getState().reset(token, chatToken, user);
        } else {
          // console.log("else");

          notification.error({ message: 'Login Error', description: message });
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
            //console.log("else:session error");
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
        notification.error({ message: 'Login Error', description: 'An error occurred during login' });

        //console.log("error: goes to catch block",error);
        set({
          token: null,
          chatToken: null,
          user: null,
          isAuthenticated: false,
        });
      }
    },
    googleLogin: async (jwt) => {
      try {
        const fp = await FingerprintJS.load();
        const { visitorId } = await fp.get();
        const res = await servicePost(
          "auth/auth-api/v1/login/google?type=student",
          { jwt, signature: visitorId }
        );
        const {
          data: { user, token, chatToken },
          message,
          success,
        } = res;
        if (success) {
          notification.success({ message: 'Login Success', description: `Hey ${user.firstName} Welcome back` });

          const { firstName = "", lastName = "", email = "" } = user;
          // message.success(`Hey ${firstName} Welcome back`, { duration: 4000 });
          localStorage.setItem("token", token);
          setHeader("signature", visitorId);
          setHeader("auth", `bearer ${token}`);
          set({ token, chatToken, user, isGoogleAuthenticated: true });
        } else {
          notification.error({ message: 'Login Error', description: message });

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
        console.log(error);
        deleteHeader("auth");
        notification.error({ message: 'Login Error', description: 'An error occurred during login' });

      }
    },
    // googleLogin: async (credential) => {
    //   try {
    //     const fp = await FingerprintJS.load();
    //     const { visitorId } = await fp.get();
    //     const res = await servicePost(
    //       "auth/auth-api/v1/login/google?type=student",
    //       { credential: credential, signature: visitorId }
    //     );
    //     const {
    //       data: { user, token, chatToken },
    //       message,
    //       success,
    //     } = res;
    //     if (success) {
    //       const { firstName = "", lastName = "", email = "" } = user;
    //       // message.success(`Hey ${firstName} Welcome back`, { duration: 4000 });
    //       localStorage.setItem("token", token);
    //       setHeader("signature", visitorId);
    //       setHeader("auth", `bearer ${token}`);
    //       set({ token, chatToken, user, isGoogleAuthenticated: true });
    //     } else {
    //       // message.error(message, { duration: 4000 });
    //       if (message === "Too many active sessions") {
    //         setHeader("auth", `bearer ${token}`);
    //         set({
    //           token,
    //           chatToken,
    //           user,
    //           isAuthenticated: false,
    //           screenLimitReached: true,
    //         });
    //       } else {
    //         set({
    //           token: null,
    //           chatToken: null,
    //           user: null,
    //           isGoogleAuthenticated: false,
    //         });
    //       }
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     deleteHeader("auth");

    //   }
    // },
    loadUser: async () => {
      try {
        const token = localStorage.getItem("token");
        const fp = await FingerprintJS.load();
        const { visitorId } = await fp.get();
        const {
          data: { user, chatToken },
        } = await serviceGet(
          `auth/auth-api/v1/verifyAuthToken?u=student&token=${token}&signature=${visitorId}`
        );
        if (user) {
          setHeader("auth", `bearer ${token}`);
          setHeader("signature", visitorId);
          set({
            token,
            chatToken,
            user,
            isAuthenticated: true,
            isGoogleAuthenticated: true,
          });
        } else {
          deleteHeader("auth");
          set({
            token: null,
            chatToken: null,
            user: null,
            isAuthenticated: false,
            isGoogleAuthenticated: false,
          });
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
      }
    },
    logout: () => {
      localStorage.removeItem("token");
      deleteHeader("auth");
      set({
        token: null,
        chatToken: null,
        user: null,
        isAuthenticated: false,
        isGoogleAuthenticated: false,
      });
      //console.log("logout");
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
          "auth/auth-api/v1/forgot-password?type=student",
          { ...values, callbackUrl: "https://www.student-platform.devtown.in" }
        );
        const { success, message } = res;
        //console.log(message)
        if (success != false) {
          notification.success({ message: "Success", description: message });
        } else {
          notification.error({ message: "Error", description: message });
        }
      } catch (error) {
        //console.log(error.message)
      }
    },

    //reset password code
    async resetPassword(values, token) {
      if (token != null) {
        try {
          const res = await servicePost(
            `auth/auth-api/v1/reset-password?type=student&token=${token}`,
            { ...values }
          );
          const { success, message } = res;
          if (success) {
            return notification.success({
              message: "Success",
              description: message,
            });
          } else {
            const [err] = res.data.errors;
            //console.log(err)
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
          //console.log(error)
        }
      }
    },
  }))
);
// useAuthStore.subscribe(console.log, state => state.isAuthenticated);
export default useAuthStore;
