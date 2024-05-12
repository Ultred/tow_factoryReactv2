// authStore.js
import { create } from "zustand";

const useAuthStore = create((set) => ({
  // State
  isAuthenticated: false,
  token: localStorage.getItem("token") || null,

  // Actions
  login: (token) => {
    localStorage.setItem("token", token);
    set({ isAuthenticated: true, token });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ isAuthenticated: false, token: null });
  },
}));

export default useAuthStore;
