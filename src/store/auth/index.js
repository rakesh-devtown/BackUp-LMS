import {create} from "zustand";

const useAuthStore = create((set) => ({
  auth: {
    token: null,
    user: null,
    isAuthenticated: false,
  },
  setAuth: (token, user) =>
    set((state) => ({
      auth: {
        token,
        user,
        isAuthenticated: true,
      },
    })),
  clearAuth: () =>
    set((state) => ({
      auth: {
        token: null,
        user: null,
        isAuthenticated: false,
      },
    })),
}));

export default useAuthStore;