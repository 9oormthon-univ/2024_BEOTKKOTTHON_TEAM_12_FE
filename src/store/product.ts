import { Product } from 'src/types/types';
import { create } from 'zustand';

interface Actions {
  setProduct: (newProducts: Product) => void;
}

interface ProductsStore {
  product: Product | null;
  actions: Actions;
}

export const useProductStore = create<ProductsStore>((set) => ({
  product: null,
  actions: {
    setProduct: (newProduct) => set(() => ({ product: newProduct })),
  },
}));

export const useProduct = () => useProductStore((state) => state.product);
export const useProductActions = () => useProductStore((state) => state.actions);
