import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { type Product } from "@/types";
import { toast } from "sonner";

interface CartStore {
  products: Product[];
  addProduct: (product: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      products: [],
      addProduct: (product: Product) => {
        const currentProducts = get().products;
        const existingProduct = currentProducts.find(
          (currentProduct) => currentProduct.id === product.id
        );

        if (existingProduct) {
          return toast.error("Product already in cart.");
        }

        set({ products: [...get().products, product] });
        toast.success("Product added to cart.");
      },
      removeItem: (id: string) => {
        set({
          products: [...get().products.filter((product) => product.id !== id)],
        });
        toast.success("Product removed from the cart.");
      },
      removeAll: () => set({ products: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
