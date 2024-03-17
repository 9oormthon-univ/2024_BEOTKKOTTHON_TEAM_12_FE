import { Product } from 'src/types/types';
import { create } from 'zustand';

interface Actions {
  setInitalProducts: (newProducts: Product[]) => void;
  // setFilteredProducts: (category: string) => void;
  setActiveCategory: (category: string) => void;
  showSalesProducts: () => void;
  setClickedOnSale: () => void;
}

interface ProductsStore {
  allProducts: Product[];
  activeCategory: string;
  clickedOnSale: string | null;
  // filteredProducts: Product[];
  actions: Actions;
}

export const useProductsStore = create<ProductsStore>((set) => ({
  allProducts: [],
  activeCategory: '전체',
  clickedOnSale: null,
  // filteredProducts: [],
  actions: {
    setInitalProducts: (newProducts) =>
      set(() => ({ allProducts: [...newProducts], filteredProducts: [...newProducts] })),

    setActiveCategory: (category) => set(() => ({ activeCategory: category })),
    setClickedOnSale: () =>
      set((state) => ({ clickedOnSale: state.clickedOnSale === null ? 'onSale' : null })),

    // setFilteredProducts: (category) =>
    //   set((state) => ({
    //     ...state,
    //     filteredProducts:
    //       category === '전체'
    //         ? state.allProducts
    //         : state.allProducts.filter((product) => product.category === category),
    //   })),
    showSalesProducts: (clicked) => {
      if (clicked) {
        set((state) => ({
          ...state,
          filteredProducts: state.allProducts.filter((product) => product.sold === '판매중'),
        }));
      } else {
        set((state) => ({ filteredProducts: state.allProducts }));
      }
    },
  },
}));

export const useAllProducts = () => useProductsStore((state) => state.allProducts);
export const useActiveCategory = () => useProductsStore((state) => state.activeCategory);
export const useClickedOnSale = () => useProductsStore((state) => state.clickedOnSale);
// export const useFilteredProducts = () => useProductsStore((state) => state.filteredProducts);
export const useProductsActions = () => useProductsStore((state) => state.actions);
