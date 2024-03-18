import { ProductListItem } from 'src/types/types';
import { create } from 'zustand';

interface Actions {
  setInitialProductList: (newProductList: ProductListItem[]) => void;
}

interface ProductListDataStore {
  productList: ProductListItem[];
  actions: Actions;
}

export const useProductListData = create<ProductListDataStore>((set) => ({
  productList: [],
  actions: {
    setInitialProductList: (newProductList) => set(() => ({ productList: [...newProductList] })),
  },
}));
