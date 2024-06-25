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
    selectedEnrollIdOfCourse: "",
    currentModule:[],
    
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
    setCurrentModule: (module) => {
      set({ currentModule: module });
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
    getAllEnrolledCourses: async (wantFetch) => {
      try {
        const user = useAuthStore.getState().user;
        setHeader("Authorization", `bearer ${localStorage.getItem("token")}`);
        const isAuthenticated = useAuthStore.getState().isAuthenticated;
        const isTokenValid = useAuthStore.getState().isTokenValid;
        console.log(isAuthenticated, isTokenValid);
        console.log("coming from batch store",wantFetch);
       // console.log("coming from batch store",wantFetch);
        if(!isTokenValid && !wantFetch) return;
        
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
    setEnrollId: (enrollId) => {
      set({ selectedEnrollIdOfCourse: enrollId });
    },
    getModuleOfEnrolledCourse: async (enrollId) => {
      try{
        //setHeader("auth", `bearer ${localStorage.getItem("token")}`);
        set({
          courseLoading: true,
          selectedEnrollIdOfCourse: enrollId,
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
        //console.log("geting sections details");
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
          console.log("data parent is",data?.parentId);
          if(data?.parentId)
          {
            const parentSection = await useBatchStore.getState().currentCourseDetails.sections.find((section)=>section.id === data.parentId);
            console.log("parentSection",parentSection);
            parentSection.subsections.sort((a,b)=>a.orderNumber-b.orderNumber);
            set({ currentModule: parentSection });
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
        const userId = useAuthStore.getState().user.id;
        const courseId = useBatchStore.getState().currentCourseDetails.id;
        const res = await servicePost(`student/student/v1/course/progress?sectionItemId=${sectionItemId}&userId=${userId}`);
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

    getCurrentSectionDetailsWithVideo: async (sectionId,videoId) => {
      try {
        set({courseLoading:true})
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
          await useBatchStore.getState().getVideo(videoId);
          //console.log("data parent is",data?.parentId);
          if(data?.parentId)
          {
            const parentSection = await useBatchStore.getState().currentCourseDetails.sections.find((section)=>section.id === data.parentId);
           // console.log("parentSection",parentSection);
            parentSection.subsections.sort((a,b)=>a.orderNumber-b.orderNumber);
            set({ currentModule: parentSection });
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
    getFirstSectionOfCourse: async (courseId) => {
      try {
        set({courseLoading:true})
        setHeader("auth", `bearer ${localStorage.getItem("token")}`);
        const userId = useAuthStore.getState().user.id;
        const res = await serviceGet(`/student/student/v1/course/firstSectionModule/${courseId}?userId=${userId}`);
        let {
          success,
          message,
          data,
        } = res;
        if (success) 
        {
          if(data?.subsections?.length > 0){
            data.subsections[0]?.sectionItems?.sort((a,b)=>a.orderNumber-b.orderNumber);
            set({ currentCourseSections: data.subsections[0] });
            await useBatchStore.getState().getVideo(data.subsections[0]?.sectionItems[0].id);
          }else if(data?.sectionItems?.length > 0){
            data.sectionItems.sort((a,b)=>a.orderNumber-b.orderNumber);
            set({ currentCourseSections: data });
            await useBatchStore.getState().getVideo(data.sectionItems[0].id);
          }

          console.log("data parent is",data);
          if(data?.subsections.length > 0)
          {
             // console.log("data parent is",data?.subsections[0]);
              set({ currentModule: data });
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
    }

  }))
);

export default useBatchStore;
