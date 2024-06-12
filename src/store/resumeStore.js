import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { serviceGet, servicePost } from "../utils/api";
import { notification } from "antd";

const useResumeStore = create(
    devtools((set, get) => ({
        personalDetails:{},
        education:[],
        experience:[],
        skills:[],
        projects:[],
        certifications:[],
        socialLinks:{},

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

        fetchResume: async() => {
            try{
                const res = await serviceGet("resume");
                const {
                    data: { resume },
                    message,
                    success,
                  } = res;

                if(success){
                    const { personalDetails, education, experience, skills, projects, certifications } = resume;
                    set({
                        personalDetails,
                        education,
                        experience,
                        skills,
                        projects,
                        certifications,
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
            }
        },

        fetchPersonalDetails: async() => {
            try{
                const res = await servicePost("resume/personalDetails");
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
                notification.error({
                    message: "Error",
                    description: err.message,
                })
            }
        },
        updatePersonalDetails: async(personalDetails) => {
            try{
                const res = await servicePost("resume/personalDetails",personalDetails);
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

    }))
)

export default useResumeStore;