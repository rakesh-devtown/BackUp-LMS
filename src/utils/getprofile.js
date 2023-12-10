import toast from "react-hot-toast";
import { serviceGet } from "./api";

//gets the user profile
export const getProfile = async () => {
    try {
        const {
            success,
            data: { student },
        } = await serviceGet("student/student-api/v1/me");
        if (success) {
            toast.success('Student Details fetched');
            return student;
        }
    } catch (error) {
        toast.error(error.response);
        return null;
    }
};