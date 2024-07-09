

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { serviceGet, servicePost } from "../utils/api";
import { notification } from "antd";
import useAuthStore from "./authStore";
import loginUiStore from "./loginUi.store";

const useMeStore = create(
    devtools((set) => ({
        user: null,
        nameCanBeChanged: false,
        getStudentById: async () => {
            try {
                const userId = useAuthStore.getState().user.id;
                const res = await serviceGet(`student/student/v1/me?id=${userId}`);
                const { data: { user, nameCanBeChanged }, success, message } = res.data;
                if (success) {
                    set({
                        user, 
                        nameCanBeChanged
                    })
                }
            } catch (error) {
                notification.error({
                    message: "Error",
                    description: error.message
                  });
            }
        },
        async requestPasswordChange(value) {
            try {
              const res = await servicePost(
                "student/student/v1/me/request-password-change",
                {
                  email: value,
                }
              );
              const { success, message } = res;
              if (success) {
                notification.success({ message: "Success", description: message });
                return true;
              }
              return false;
            } catch (error) {
              notification.error({ message: "Error", description: error.message });
              return false;
            }
          },
          async changeName(email, name) {
            try {
              const res = await servicePost("student/student/v1/me/change-name", {
                email,
                name,
              });
              const { success, message } = res;
              notification.success({ message: "Success", description: message });
              return true;
            } catch (error) {
              notification.error({ message: "Error", description: error.message });
              return false;
            }
          },
          async changePhone(email, phone) {
            try {
              const res = await servicePost("student/student/v1/me/change-phone", {
                email,
                phone,
              });
              const { success, message } = res;
              notification.success({ message: "Success", description: message });
              return true;
            } catch (error) {
              notification.error({ message: "Error", description: error.message });
              return false;
            }
          },
          async passwordChangeOtpVerify(otp,email) {
            try {
      
              const res = await servicePost(
                "student/student/v1/me/verify-otp",
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
          async changePassowrd(password) {
            try {
      
              const otp = loginUiStore?.getState().currentOtp;
              const email = loginUiStore?.getState().currentUserEmail;
      
              const res = await servicePost(
                `student/student/v1/me/change-password`,
                { password, otp, email }
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
    }))
)

export default useMeStore; 