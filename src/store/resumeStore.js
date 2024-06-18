import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { serviceGet, servicePost, servicePut } from "../utils/api";
import { notification } from "antd";
import useAuthStore from "./authStore";

const useResumeStore = create(
    devtools((set, get) => ({
        resumeId:null,
        loading: false,
        personalDetails:{},
        education:[],
        experience:[],
        skills:[],
        projects:[],
        certifications:[],
        socialLinks:{},
        role:null,

        resetResume: () => {
            set({
                personalDetails:{},
                education:[],
                experience:[],
                skills:[],
                projects:[],
                certifications:[],
            })
        },

        setLoading: (loading) => {
            set({loading});
        },

        fetchResume: async() => {
            try{
                set({loading:true});
                const userId = useAuthStore.getState().user.id;
                const res = await serviceGet(`student/student/v1/resume/?id=${userId}`);
                const {
                    data: { resume },
                    message,
                    success,
                  } = res;

                if(success){
                    const { personalDetails, education, experience, Skills, projects, certifications, socialLinks, role} = resume;
                    set({
                        resumeId:resume.id,
                        personalDetails,
                        education,
                        experience,
                        skills:Skills,
                        projects,
                        certifications,
                        socialLinks,
                        role
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

        fetchPersonalDetails: async() => {
            try{
                const res = await servicePost(``);
                console.log(res);
                const {
                    data: { user },
                    message,
                    success,
                  } = res;

                if(success){
                    set({personalDetails:user});
                }
                else{
                    notification.error({
                        message: "Error",
                        description: message,
                    })
                }
            }catch(err)
            {
                console.log(err);
                notification.error({
                    message: "Error",
                    description: err.message,
                })
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

                if(success){
                    set({personalDetails:personalDetails});
                    notification.success({
                        message: "Success",
                        description: "Personal Details Updated",
                    })
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

        setSocialLinks: async(socialLinks) => {
            try{
                const res = await servicePost("resume/socialLinks",socialLinks);
                const {
                    data: { user },
                    message,
                    success,
                  } = res;

                if(success){
                    set({socialLinks:socialLinks});
                    notification.success({
                        message: "Success",
                        description: "Social Links Updated",
                    })
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
            }
        },
        updateSkills: async(skills,prevSkills) => {
            try{
                set({loading:true});
                const res = await servicePost("student/student/v1/resume/skills",skills);
                const {
                    data,
                    message,
                    success,
                  } = res;

                if(success){
                    set({skills:[...prevSkills]});
                    notification.success({
                        message: "Success",
                        description: "Skills Updated",
                    })
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
        updateSocialLinks: async(socialLinks) => {
            try{
                const userId = useAuthStore.getState().user.id;
                set({loading:true});
                const res = await servicePost(`student/student/v1/resume/social-links/edit?id=${userId}`,socialLinks);
                const {
                    data,
                    message,
                    success,
                  } = res;

                if(success){
                    set({socialLinks:socialLinks});
                    notification.success({
                        message: "Success",
                        description: "Social Links Updated",
                    })
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
        }

    }))
)

export default useResumeStore;