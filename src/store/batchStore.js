import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { serviceGet } from "../utils/api";
import { notification } from "antd";
import { setHeader } from "../utils/header";

const useBatchStore = create(
  devtools((set, get) => ({
    currentBatch: {},
    currentBatchId: "",
    currentVideo: {},
    currentVideoDetails: {},
    section: {},
    sections: [],
    
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
  }))
);

export default useBatchStore;
