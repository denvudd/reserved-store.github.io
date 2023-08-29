import { create } from "zustand";
import { type Product } from "@/types";

interface PreviewModalStore {
  isOpen: boolean;
  product?: Product;
  onOpen: (product: Product) => void;
  onClose: () => void;
}

export const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  product: undefined,
  onOpen: (product: Product) => set({ product, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
