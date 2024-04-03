import { Product } from 'types/types';
import { create } from 'zustand';

interface Actions {
  setFormData: (name: string, value: string | number) => void;
  setShowImages: (urls: string[]) => void;
  changeImgFileToString: (strArr: string[]) => void;
  receiveData: (data: Product) => void;
  resetFormData: () => void;
}

interface FormDataStore {
  formData: Product;
  showImages: string[];
  actions: Actions;
}

const initialFormData = {
  id: 0,
  product_name: '',
  price: 0,
  product_image: [],
  product_content: '',
  product_status: '',
  post_status: '판매중',
  place: '',
  is_private: false,
  category: '',
  wish: '',
  count: '',
};

export const useFormDataStore = create<FormDataStore>((set) => ({
  formData: initialFormData,
  showImages: [],
  actions: {
    setFormData: (name, value) => {
      set((state) => ({
        formData: { ...state.formData, [name]: value },
      }));
    },

    setShowImages: (urls) => set(() => ({ showImages: [...urls] })),
    receiveData: (data) => set(() => ({ formData: data, showImages: data.product_image })),
    changeImgFileToString: (strArr) => {
      const content = strArr.slice(1, -1).join('');
      const imageArray = content.split(',').map((str) => str.trim());
      set((state) => ({ formData: { ...state.formData, product_image: imageArray } }));
    },
    resetFormData: () => set(() => ({ formData: initialFormData, showImages: [] })),
  },
}));

export const useFormData = () => useFormDataStore((state) => state.formData);
export const useShowImages = () => useFormDataStore((state) => state.showImages);
export const useFormDataActions = () => useFormDataStore((state) => state.actions);
