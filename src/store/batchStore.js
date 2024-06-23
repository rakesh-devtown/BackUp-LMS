import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { serviceGet } from "../utils/api";
import { notification } from "antd";
import { setHeader } from "../utils/header";
import useAuthStore from "./authStore";

const useBatchStore = create(
  devtools((set, get) => ({
    courseLoading: false,
    currentBatch: {},
    currentBatchId: "",
    currentVideo: {},
    currentVideoDetails: {},
    section: {},
    sections: [],
    enrolledCourses: [],
    currentCourseDetails: {},
    completedCoursesCertificates:[],
    
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
        const res = await serviceGet(
          `student/student-api/v1/video?id=${videoId}`
        );
        const {
          success,
          message,
          data: { video },
        } = res;
        if (success) {
          set({ currentVideoDetails: video });
        }
      } catch (e) {
        notification.error({
          message: "Error",
          description: e.message,
        });
      }
    },
    getCurrentBatch: async (batchId) => {
      try {
        setHeader("auth", `bearer ${localStorage.getItem("token")}`);
        const res = await serviceGet(
          `student/student-api/v1/batch?batchId=${batchId}`
        );
        const {
          success,
          message,
          data: { batch },
        } = res;
        if (success) {
          set({ currentBatch: batch });
          set({ sections: batch?.course[0]?.sections });
         
        }
      } catch (e) {
        notification.error({
          message: "Error",
          description: e.message,
        });
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
          set({ enrolledCourses: data });
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
    }
  }))
);

export default useBatchStore;
