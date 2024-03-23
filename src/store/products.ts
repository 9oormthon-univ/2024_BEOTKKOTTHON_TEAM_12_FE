// import { Product } from 'src/types/types';
// import { create } from 'zustand';

// interface Actions {
//   setInitalProducts: (newProducts: Product[]) => void;
//   setActiveCategory: (category: string) => void;
//   setClickedOnSale: () => void;
// }

// interface ProductsStore {
//   allProducts: Product[];
//   activeCategory: string;
//   clickedOnSale: string | null;
//   actions: Actions;
// }

// export const useProductsStore = create<ProductsStore>((set) => ({
//   allProducts: [],
//   activeCategory: '전체',
//   clickedOnSale: null,
//   actions: {
//     setInitalProducts: (newProducts) => set(() => ({ allProducts: [...newProducts] })),

//     setActiveCategory: (category) => set(() => ({ activeCategory: category })),
//     setClickedOnSale: () =>
//       set((state) => ({ clickedOnSale: state.clickedOnSale === null ? 'onSale' : null })),
//   },
// }));

// export const useAllProducts = () => useProductsStore((state) => state.allProducts);
// // export const useActiveCategory = () => useProductsStore((state) => state.activeCategory);
// // export const useClickedOnSale = () => useProductsStore((state) => state.clickedOnSale);
// export const useProductsActions = () => useProductsStore((state) => state.actions);
export {};
