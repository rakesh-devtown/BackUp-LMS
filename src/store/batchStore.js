import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { serviceGet, servicePost } from "../utils/api";
import { notification } from "antd";
import { setHeader } from "../utils/header";
import useAuthStore from "./authStore";

const useBatchStore = create(
  devtools((set, get) => ({
    courseLoading: false,
    currentBatch: {},
    sections: [],
    enrolledCourses: [],
    currentCourseDetails: {},
    completedCoursesCertificates:[],
    currentCourseSections: {},
    currentVideoDetails:{},
    currentVideo: {},
    
    setSection: (tracker) => {
      set((state) => {
        const newSections = state.sections.map((section) => {
          if (section._id === tracker.section) {
            return {
              ...section,
              progress: { ...tracker },
            };
          } else {
            return section;
          }
        });
        return { sections: newSections };
      });
    },
    setCurrentSection: (section) => {
      set({ section: section });
    },

    setCurrentVideo: (video) => {
      set({ currentVideo: video });
    },
    setCurrentBatchId: (batchId) => {
      set({ currentBatchId: batchId });
    },

    getVideo: async (videoId) => {
      try {
        setHeader("auth", `bearer ${localStorage.getItem("token")}`);
        set({courseLoading:true})
        const res = await serviceGet(
          `student/student/v1/video?videoId=${videoId}`
        );
        const {
          success,
          message,
          data
        } = res;
        if (success) {
          set({ currentVideo: data });
        }
      } catch (e) {
        notification.error({
          message: "Error",
          description: e.message,
        });
      }finally{
        set({courseLoading:false})
      }
    },
    getAllEnrolledCourses: async () => {
      try {
        set({
          courseLoading: true,
        })
        const studentId = useAuthStore.getState().user.id;
        const res = await serviceGet("student/student/v1/course?studentId="+studentId);
        const {
          success,
          message,
          data,
        } = res;
        if (success) {
          await set({ enrolledCourses: data });
          return data;
        }
      } catch (e) {
        notification.error({
          message: "Error",
          description: e.message,
        });
      }finally{
        set({
          courseLoading: false,
        })
      }
    },
    getModuleOfEnrolledCourse: async (enrollId) => {
      try{
        //setHeader("auth", `bearer ${localStorage.getItem("token")}`);
        set({
          courseLoading: true,
        })
        const res = await serviceGet(`student/student/v1/course/Enroll/${enrollId}`);
        const {
          success,
          message,
          data,
        } = res;
        if (success) {
          const {sections} = data;
          sections?.sort((a,b)=>a.orderNumber-b.orderNumber);
          sections?.forEach((section)=>{
            section?.sectionItems?.sort((a,b)=>a.orderNumber-b.orderNumber);
            section?.subsections?.sort((a,b)=>a.orderNumber-b.orderNumber);
            section?.subsections?.forEach((subSection)=>{
              subSection?.sectionItems?.sort((a,b)=>a.orderNumber-b.orderNumber);
            })
          })
          console.log(sections);
          set({ currentCourseDetails: {
            ...data,
            sections: sections,
          }});
        }
      }catch(e){
        notification.error({
          message: "Error",
          description: e.message,
        });
      }finally{
        set({
          courseLoading: false,
        })
      }
    },

    getCompletedCoursesCertificates: async () => {
      try {
        set({
          courseLoading: true,
        })
        const studentId = useAuthStore.getState().user.id;
        const res = await serviceGet(`student/student/v1/certificate/${studentId}?page=1&limit=20`);
        const {
          success,
          message,
          data,
        } = res;
        if (success) {
          set({ completedCoursesCertificates: data });
        }
      } catch (e) {
        notification.error({
          message: "Error",
          description: e.message,
        });
      }finally{
        set({
          courseLoading: false,
        })
      }
    },
    getCurrentSectionDetails: async (sectionId,notLoading) => {
      try {
        set({courseLoading:true})
        if(notLoading) set({courseLoading:false})
        setHeader("auth", `bearer ${localStorage.getItem("token")}`);
        const userId = useAuthStore.getState().user.id;
        const res = await serviceGet(`student/student/v1/course/sectionModules/${sectionId}?userId=${userId}`);
        const {
          success,
          message,
          data,
        } = res;
        if (success) {
          set({ currentCourseSections: data });
          if(data?.sectionItems?.length > 0 && !notLoading){
            await useBatchStore.getState().getVideo(data?.sectionItems[0].id);
          }
        }
      } catch (e) {
        notification.error({
          message: "Error",
          description: e.message,
        });
      }finally{
        set({
          courseLoading: false,
        })
      }
    },
    
    postVideoProgress: async (sectionItemId,) => {
      try {
        setHeader("auth", `bearer ${localStorage.getItem("token")}`);
        const currentVideo = useBatchStore.getState().currentVideo;
        const sectionId = currentVideo.sectionId;
        const courseId = useBatchStore.getState().currentCourseDetails.id;
        const res = await servicePost(`student/student/v1/course/progress?sectionItemId=${sectionItemId}&enrollmentId=${"eb7f536b-becd-42a4-aad9-2b630a792462"}`);
        const {
          success,
          message,
          data,
        } = res;
        if (success) {
          await useBatchStore.getState().getCurrentSectionDetails(sectionId,true);
        }
      } catch (e) {
        notification.error({
          message: "Error",
          description: e.message,
        });
      }
    },

  }))
);

export default useBatchStore;
