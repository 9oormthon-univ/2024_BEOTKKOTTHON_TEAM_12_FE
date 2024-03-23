import { Product } from 'types/types';
import { create } from 'zustand';

interface Actions {
  setProduct: (newProducts: Product) => void;
  updateOnSale: (status: string) => void;
  changeStringToArr: (strArr: string) => void;
}

interface ProductsStore {
  product: Product | null;
  actions: Actions;
}

export const useProductStore = create<ProductsStore>((set) => ({
  product: null,
  actions: {
    setProduct: (newProduct) => set(() => ({ product: newProduct })),
    updateOnSale: (status) =>
      set((state) => ({
        product: state.product ? { ...state.product, post_status: status } : null,
      })),
    changeStringToArr: (strArr) => {
      const content = strArr.slice(1, -1);

      // 쉼표(,)를 기준으로 내부 문자열을 분할하여 배열로 만듭니다.
      const imageArray = content.split(',').map((str: string) => {
        // 각 요소에서 따옴표를 제거한 후 반환합니다.
        return str.trim().replace(/^"(.*)"$/, '$1');
      });

      // 수정된 이미지 배열을 상태에 설정합니다.
      set((state) => ({
        product: {
          ...(state.product as Product),
          product_image: imageArray,
        },
      }));
    },
  },
}));

export const useProduct = () => useProductStore((state) => state.product);
export const useProductActions = () => useProductStore((state) => state.actions);
