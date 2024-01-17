
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useLoadingStore = create(
    devtools((set , get ) =>({
        loading: false,
        setLoading: (loading) => set({loading})
    }))
)

export default useLoadingStore; 