
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useLayoutUiStore = create(
    devtools((set , get ) =>({
        isMobileSideBarOpen: false,
        setMobileSideBarOpen: (isMobileSideBarOpen) => set({isMobileSideBarOpen}),
    }))
)

export default useLayoutUiStore; 