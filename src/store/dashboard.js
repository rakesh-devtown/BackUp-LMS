import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { serviceGet } from "../utils/api";
import { notification } from "antd";
import { setHeader } from "../utils/header";

const useDashBoardUI = create(
  devtools((set, get) => ({
    currentPage: "signup",
    currentLeftPage: "signin",
    setCurrentPage: (page) => {
      set({ currentPage: page });
    },
    setCurrentLeftPage: (page) => {
      set({ currentLeftPage: page });
    },
  }))
);

export default useDashBoardUI;
