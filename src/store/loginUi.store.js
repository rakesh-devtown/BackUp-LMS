import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { serviceGet } from "../utils/api";
import { notification } from "antd";
import { setHeader } from "../utils/header";

const loginUiStore = create(
  devtools((set, get) => ({
    currentPage: "signup",
    setCurrentPage: (page) => {
      set({ currentPage: page });
    },
  }))
);

export default loginUiStore;
