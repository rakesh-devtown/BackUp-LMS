import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  serviceDelete,
  serviceGet,
  servicePost,
  servicePut,
} from "../utils/api";
import { notification } from "antd";
import useAuthStore from "./authStore";
import loginUiStore from "./loginUi.store";

const useResumeStore = create(
    devtools((set, get) => ({
        resumeId:null,
        role:null,
        loading: false,
        personalDetails:{},
        education:[],
        experience:[],
        skills:[],
        projects:[],
        certifications:[],
        socialLinks:{},

    resetResume: () => {
      set({
        personalDetails: {},
        education: [],
        experience: [],
        skills: [],
        projects: [],
        certifications: [],
      });
    },

    setLoading: (loading) => {
      set({ loading });
    },

    fetchResume: async () => {
      try {
        set({ loading: true });
        const userId = useAuthStore.getState().user.id;
        const res = await serviceGet(`student/student/v1/resume/?id=${userId}`);
        const {
          data: { resume },
          message,
          success,
        } = res;

                if(success){
                    const { personalDetails, education, workExp, Skills, projects, certifications, socialLinks, role} = resume;
                    //console.log(resume?.role);
                    set({
                        resumeId:resume.id,
                        personalDetails,
                        education,
                        role:resume?.role,
                        skills:Skills,
                        projects,
                        certifications,
                        socialLinks,
                        role,
                        experience:workExp
                    });
                }
                else{
                    notification.error({
                        message: "Error",
                        description: message,
                    })
                }
            }catch(err)
            {
                notification.error({
                    message: "Error",
                    description: err.message,
                })
            }finally{
                set({loading:false});
            }
        },
        updatePersonalDetails: async(personalDetails) => {
            try{
                set({loading:true});
                const userId = useAuthStore.getState().user.id;
                const res = await servicePost(`student/student/v1/resume/personal-details/edit?id=${userId}`,personalDetails);
                const {
                    data: { user },
                    message,
                    success,
                  } = res;

        if (success) {
          set({ personalDetails: personalDetails });
          notification.success({
            message: "Success",
            description: "Personal Details Updated",
          });
        } else {
          notification.error({
            message: "Error",
            description: message,
          });
        }
      } catch (err) {
        notification.error({
          message: "Error",
          description: err.message,
        });
      } finally {
        set({ loading: false });
      }
    },

    setSocialLinks: async (socialLinks) => {
      try {
        const res = await servicePost("resume/socialLinks", socialLinks);
        const {
          data: { user },
          message,
          success,
        } = res;

        if (success) {
          set({ socialLinks: socialLinks });
          notification.success({
            message: "Success",
            description: "Social Links Updated",
          });
        } else {
          notification.error({
            message: "Error",
            description: message,
          });
        }
      } catch (err) {
        notification.error({
          message: "Error",
          description: err.message,
        });
      }
    },
    updateSkills: async (skills, prevSkills) => {
      try {
        set({ loading: true });
        const res = await servicePost(
          "student/student/v1/resume/skills",
          skills
        );
        const { data, message, success } = res;

        if (success) {
          set({ skills: [...prevSkills, ...data] });
          notification.success({
            message: "Success",
            description: "Skills Updated",
          });
        } else {
          notification.error({
            message: "Error",
            description: message,
          });
        }
      } catch (err) {
        notification.error({
          message: "Error",
          description: err.message,
        });
      } finally {
        set({ loading: false });
      }
    },
    updateSocialLinks: async (socialLinks) => {
      try {
        const userId = useAuthStore.getState().user.id;
        set({ loading: true });
        const res = await servicePost(
          `student/student/v1/resume/social-links/edit?id=${userId}`,
          socialLinks
        );
        const { data, message, success } = res;

        if (success) {
          set({ socialLinks: socialLinks });
          notification.success({
            message: "Success",
            description: "Social Links Updated",
          });
        } else {
          notification.error({
            message: "Error",
            description: message,
          });
        }
      } catch (err) {
        notification.error({
          message: "Error",
          description: err.message,
        });
      } finally {
        set({ loading: false });
      }
    },
    postCertificates: async (certificates) => {
      try {
        const resumeId = useResumeStore.getState().resumeId;
        set({ loading: true });
        const res = await servicePost(
          `student/student/v1/resume/certification`,
          {
            ...certificates,
            resumeId: resumeId,
          }
        );
        const { data, message, success } = res;

        const prevCertificates = useResumeStore.getState().certifications;
        if (success) {
          set({ certifications: [...prevCertificates, data] });
          notification.success({
            message: "Success",
            description: "Certifications Added",
          });
        } else {
          notification.error({
            message: "Error",
            description: message,
          });
        }
      } catch (err) {
        notification.error({
          message: "Error",
          description: err.message,
        });
      } finally {
        set({ loading: false });
      }
    },
    postEducation: async (education) => {
      try {
        const resumeId = useResumeStore.getState().resumeId;
        set({ loading: true });
        const res = await servicePost(`student/student/v1/resume/education`, {
          ...education,
          resumeId: resumeId,
        });
        const { data, message, success } = res;

        const prevEducation = useResumeStore.getState().education;
        if (success) {
          set({ education: [...prevEducation, data] });
          notification.success({
            message: "Success",
            description: "Education Added",
          });
        } else {
          notification.error({
            message: "Error",
            description: message,
          });
        }
      } catch (err) {
        notification.error({
          message: "Error",
          description: err.message,
        });
      } finally {
        set({ loading: false });
      }
    },
    deleteEducation: async (id) => {
      try {
        set({ loading: true });
        const res = await serviceDelete(
          `student/student/v1/resume/education?id=${id}`
        );
        const { data, message, success } = res;

        const prevEducation = useResumeStore.getState().education;
        if (success) {
          set({ education: prevEducation.filter((edu) => edu.id !== id) });
          notification.success({
            message: "Success",
            description: "Education Deleted",
          });
        } else {
          notification.error({
            message: "Error",
            description: message,
          });
        }
      } catch (err) {
        notification.error({
          message: "Error",
          description: err.message,
        });
      } finally {
        set({ loading: false });
      }
    },
    updateEducation: async (education) => {
      try {
        set({ loading: true });
        const userId = useAuthStore.getState().user.id;
        const res = await servicePost(
          `student/student/v1/resume/education/edit?id=${userId}`,
          education
        );
        const { data, message, success } = res;

        const prevEducation = useResumeStore.getState().education;
        if (success) {
          console.log(prevEducation);
          console.log(data);
          const newEducation = prevEducation.filter(
            (edu) => edu.id !== data.id
          );
          set({ education: [...newEducation, data] });
          notification.success({
            message: "Success",
            description: "Education Updated",
          });
        } else {
          notification.error({
            message: "Error",
            description: message,
          });
        }
      } catch (err) {
        notification.error({
          message: "Error",
          description: err.message,
        });
      } finally {
        set({ loading: false });
      }
    },
    postExperience: async (experience) => {
      try {
        const resumeId = useResumeStore.getState().resumeId;
        set({ loading: true });
        const res = await servicePost(`student/student/v1/resume/work-exp`, {
          ...experience,
          resumeId: resumeId,
        });
        const { data, message, success } = res;

        const prevExperience = useResumeStore.getState().experience;
        if (success) {
          set({ experience: data });
          notification.success({
            message: "Success",
            description: "Experience Added",
          });
        } else {
          notification.error({
            message: "Error",
            description: message,
          });
        }
      } catch (err) {
        notification.error({
          message: "Error",
          description: err.message,
        });
      } finally {
        set({ loading: false });
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
        console.log(otp, email);

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
);

export default useResumeStore;
