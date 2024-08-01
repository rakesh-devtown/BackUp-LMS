import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useIsModalOpen = create(
  devtools((set, get) => ({
    isAssignmentModalOpen: false,
    setIsAssignmentModalOpen: (value) => {
      set({ isAssignmentModalOpen: value });
    },
  }))
);

export default useIsModalOpen;
