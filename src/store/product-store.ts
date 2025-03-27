import { IProduct } from "@/types/product-types";
import { create } from "zustand";

interface IProductState {
  products: IProduct[];
  addProduct: (product: IProduct) => void;
  addProductList: (products: IProduct[]) => void;
  removeProduct: (id: string) => void;
  editProductName: (id: string, newName: string) => void;
}

export const useProductStore = create<IProductState>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  addProductList: (newProducts) =>
    set((state) => {
      const existingProductIds = new Set(state.products.map((p) => p.id));

      const uniqueNewProducts = newProducts.filter(
        (product) => !existingProductIds.has(product.id),
      );

      return {
        products: [...state.products, ...uniqueNewProducts],
      };
    }),
  removeProduct: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),

  editProductName: (productId, newName) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId ? { ...product, name: newName } : product,
      ),
    })),
}));
