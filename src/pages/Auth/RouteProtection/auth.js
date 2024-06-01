import { notification } from "antd";
import { servicePost} from "../../../utils/api";
import { setHeader } from "../../../utils/header";
class Auth {
    constructor() {
        const token = localStorage.getItem('token');
        if (!token)
            this.authenticated = false;
        else
            this.authenticated = true;
    }
//forgot password code
    async forgotPassword(callBack, values) {
        try {
            const res = await servicePost('auth/auth-api/v1/forgot-password', { ...values, callbackUrl:"https://www.student-platform.devtown.in" })
            const { success, message } = res
            if (success != false) {
                notification.success({
                    message: 'Success',
                    description: message,
                });
                // toast.success(message);
            } else {
                notification.error({
                    message: 'Error',
                    description: message,
                });
                // toast.error(message);
            }
            callBack();
        } catch (error) {
            notification.error({
                message: 'Error',
                description: error.message,
            });

        }
    }
//reset password code
    async resetPassword(callBack, values, token) {
        if (token == null)
            callBack();
        else
            try {
                const res = await servicePost(`auth/auth-api/v1/reset-password?&token=${token}`, { ...values })
                const { success, message } = res
                if (success) {
                    callBack();
                    return notification.success({
                        message: 'Success',
                        description: message,
                    });
                    // return toast.success(message);
                }
                else {
                    const [err] = res.data.errors
                    callBack();
                    return err.param === "token"
                        ? notification.error({
                            message: 'Error',
                            description: "Your invite has expired !! Reset password via Forget Password link",
                        })
                        : notification.error({
                            message: 'Error',

                        });
                }

            } catch (error) {
                notification.error({
                    message: 'Error',
                    description: error.message,
                });

                // toast.error(error.message)
            }
    }
    async generateMagicLink(values) {
        try {
            setHeader("auth", `bearer ${localStorage.getItem("token")}`);
            const res = await servicePost('auth/auth/v1/generate-magic-link', { ...values, callbackUrl:window.location.origin})
            const { success, message } = res
            if (success != false) {
                notification.success({
                    message: 'Success',
                    description: message,
                });
                // toast.success(message);
            } else {
                notification.error({
                    message: 'Error',
                    description: message,
                });
                // toast.error(message);
            }
        } catch (error) {
        }
    }

    isAuthenticated() {
        return this.authenticated;
    }
    

}

export default new Auth();