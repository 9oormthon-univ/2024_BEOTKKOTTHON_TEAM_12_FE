import { ProductListItem } from 'types/productType';
import { create } from 'zustand';

interface Actions {
  setInitialProductList: () => void;
  addProductList: (newProductList: ProductListItem[]) => void;
  setActiveCategory: (category: string) => void;
  setClickedOnSale: () => void;
  setIsSelected: (productId: number) => void;
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
    setInitialProductList: () => set(() => ({ productList: [] })),
    addProductList: (newProductList) => {
      set(() => ({ productList: [...newProductList] }));
    },
    setActiveCategory: (category) => set(() => ({ activeCategory: category })),
    setClickedOnSale: () =>
      set((state) => ({
        clickedOnSale: state.clickedOnSale === null ? 'onSale' : null,
      })),
    setIsSelected: (productId) =>
      set((state) => ({
        productList: state.productList.map((product) =>
          product.id === productId ? { ...product, is_selected: !product.is_selected } : product
        ),
      })),
  },
}));

export const useProductList = () => useProductListData((state) => state.productList);
export const useActiveCategory = () => useProductListData((state) => state.activeCategory);
export const useClickedOnSale = () => useProductListData((state) => state.clickedOnSale);

export const useProductListActions = () => useProductListData((state) => state.actions);
