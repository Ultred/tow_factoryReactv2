import { create } from "zustand";

export const ModalStoreState = create((set) => ({
  isOpen: false,
  modalComponent: null,

  // StateFunctions
  openModal: (component) => set({ isOpen: true, modalComponent: component }),
  closeModal: () => set({ isOpen: false, modalComponent: null }),
}));
