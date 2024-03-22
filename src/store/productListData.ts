import { ProductListItem } from 'src/types/types';
import { create } from 'zustand';

interface Actions {
  setInitialProductList: (newProductList: ProductListItem[]) => void;
  setActiveCategory: (category: string) => void;
  setClickedOnSale: () => void;
}

interface ProductListDataStore {
  productList: ProductListItem[];
  activeCategory: string;
  clickedOnSale: string | null;
  actions: Actions;
}

export const useProductListData = create<ProductListDataStore>((set) => ({
  productList: [],
  activeCategory: '전체',
  clickedOnSale: null,

  actions: {
    setInitialProductList: (newProductList) => set(() => ({ productList: [...newProductList] })),
    setActiveCategory: (category) => set(() => ({ activeCategory: category })),
    setClickedOnSale: () =>
      set((state) => ({ clickedOnSale: state.clickedOnSale === null ? 'onSale' : null })),
  },
}));

export const useProductList = () => useProductListData((state) => state.productList);
export const useActiveCategory = () => useProductListData((state) => state.activeCategory);
export const useClickedOnSale = () => useProductListData((state) => state.clickedOnSale);

export const useProductListActions = () => useProductListData((state) => state.actions);
