import { Product } from 'src/types/types';
import { create } from 'zustand';

interface Actions {
  setInitalProducts: (newProducts: Product[]) => void;
  setFilteredProducts: (category: string) => void;
  addProduct: (newProduct: Product) => void;
}

interface ProductsStore {
  allProducts: Product[];
  filteredProducts: Product[];
  actions: Actions;
}

export const useProductsStore = create<ProductsStore>((set) => ({
  allProducts: [],
  filteredProducts: [],
  actions: {
    setInitalProducts: (newProducts) =>
      set(() => ({ allProducts: [...newProducts], filteredProducts: [...newProducts] })),

    setFilteredProducts: (category) =>
      set((state) => ({
        ...state,
        filteredProducts:
          category === '전체'
            ? state.allProducts
            : state.allProducts.filter((product) => product.category === category),
      })),

    addProduct: (newProduct) =>
      set((state) => ({ allProducts: [...state.allProducts, newProduct] })),
  },
}));

export const useAllProducts = () => useProductsStore((state) => state.allProducts);
export const useFilteredProducts = () => useProductsStore((state) => state.filteredProducts);
export const useProductsActions = () => useProductsStore((state) => state.actions);
