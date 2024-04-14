import { ProductFormDataType } from 'types/productType';
import { create } from 'zustand';

interface Actions {
  changeProductFormData: (name: string, value: string | number | string[]) => void;
  changeShowImages: (urls: string[]) => void;
  receiveProductFormData: (data: ProductFormDataType) => void;
  resetProductFormData: () => void;
}

interface FormDataStore {
  productFormData: ProductFormDataType;
  showImages: string[];
  actions: Actions;
}

const initialProductFormData = {
  product_name: '',
  price: 0,
  product_image: [],
  product_content: '',
  product_status: '',
  place: '',
  category_name: '',
};

export const useProductFormDataStore = create<FormDataStore>((set) => ({
  productFormData: initialProductFormData,
  showImages: [],
  actions: {
    changeProductFormData: (name, value) => {
      set((state) => ({
        productFormData: { ...state.productFormData, [name]: value },
      }));
    },
    changeShowImages: (urls) => set(() => ({ showImages: [...urls] })),
    receiveProductFormData: (data) =>
      set(() => ({ productFormData: data, showImages: data.product_image })),
    resetProductFormData: () =>
      set(() => ({ productFormData: initialProductFormData, showImages: [] })),
  },
}));

export const useProductFormData = () => useProductFormDataStore((state) => state.productFormData);
export const useShowImages = () => useProductFormDataStore((state) => state.showImages);
export const useFormDataActions = () => useProductFormDataStore((state) => state.actions);
