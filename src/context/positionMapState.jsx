import { create } from "zustand";

export const savePosition = create((set) => ({
  pickUpPosition: [],
  dropOffPosition: [],

  setPickUpPosition: (position) => set({ pickUpPosition: position }),
  setDropOffPosition: (position) => set({ dropOffPosition: position }),
}));
