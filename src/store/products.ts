import { Product } from 'src/types/types';
import { create } from 'zustand';

interface Actions {
  setInitalProducts: (newProducts: Product[]) => void;
}

interface ProductsStore {
  products: Product[];
  actions: Actions;
}

export const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  actions: {
    setInitalProducts: (newProducts) => set(() => ({ products: [...newProducts] })),
  },
}));

export const useProducts = () => useProductsStore((state) => state.products);
export const useProductsActions = () => useProductsStore((state) => state.actions);
