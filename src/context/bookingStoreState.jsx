import { create } from "zustand";

export const bookingStore = create((set) => ({
  bookStateValue: [],

  setBookStateValue: (position) => set({ bookStateValue: position }),
  clearBookStateValue: () => set({ bookStateValue: [] }),
}));
