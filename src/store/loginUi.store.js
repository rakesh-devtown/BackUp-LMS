import { create } from "zustand";
import { devtools } from "zustand/middleware";

const loginUiStore = create(
  devtools((set, get) => ({
    currentPage: "signup",
    currentLeftPage: "signin",
    isMobileAuthModelOpen: false,
    mobileCurrentPage: "login",
    isDesktopAuthModelOpen: false,
    currentUserEmail: null,
    setIsDesktopAuthModelOpen: (page) => {
      set({ isDesktopAuthModelOpen: page });
    },
    setMobileCurrentPage: (page) => {
      set({ mobileCurrentPage: page });
    },
    setIsMobileAuthModelOpen: (isOpen) => {
      set({ isMobileAuthModelOpen: isOpen });
    },
    setCurrentPage: (page) => {
      set({ currentPage: page });
    },
    setCurrentLeftPage: (page) => {
      set({ currentLeftPage: page });
    },
    setCurrentUserEmail: (email) => {
      set({ currentUserEmail: email });
    }
  }))
);

export default loginUiStore;
