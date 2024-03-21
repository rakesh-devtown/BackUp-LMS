
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useLayoutUiStore = create(
    devtools((set , get ) =>({
        isLmsPage: false,
        setLmsPage: (isLmsPage) => set({isLmsPage}),
    }))
)

export default useLayoutUiStore; 