

import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useLmsUiStore = create(
    devtools((set , get ) =>({
        isLmsPage: false,
        isCourseDescriptionModalOpen: false,
        setLmsPage: (isLmsPage) => set({isLmsPage}),
        setCourseDescriptionModalOpen: (isCourseDescriptionModalOpen) => set({isCourseDescriptionModalOpen}),
    }))
)

export default useLmsUiStore; 