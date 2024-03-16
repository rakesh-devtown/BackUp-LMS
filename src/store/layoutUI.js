
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useLayoutUiStore = create(
    devtools((set , get ) =>({
        isMobileSideBarOpen: false,
        currentMultiStepFormPage: 1,
        setMultiStepFormPage: (page) => set({currentMultiStepFormPage: page}),
        setMobileSideBarOpen: (isMobileSideBarOpen) => set({isMobileSideBarOpen}),
    }))
)

export default useLayoutUiStore; 