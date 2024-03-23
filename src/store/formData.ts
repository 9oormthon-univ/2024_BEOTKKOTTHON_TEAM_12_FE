import { Product } from 'src/types/types';
import { create } from 'zustand';

interface Actions {
  setFormData: (name: string, value: string | number | FileList) => void;
  // setShowImages: (urls: string) => void;
  setShowImages: (urls: string[]) => void;
  receiveData: (data: Product) => void;
  resetFormData: () => void;
}

interface FormDataStore {
  formData: Product;
  // showImages: string;
  showImages: string[];
  actions: Actions;
}

const initialFormData = {
  id: 0,
  product_name: '',
  price: 0,
  // product_image: '',
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
  // showImages: '',
  showImages: [],
  actions: {
    setFormData: (name, value) => {
      set((state) => ({
        formData: { ...state.formData, [name]: value },
      }));
    },

    // setShowImages: (urls) => set(() => ({ showImages: urls })),
    // receiveData: (data) => set(() => ({ formData: data, showImages: data.product_image })),
    // resetFormData: () => set(() => ({ formData: initialFormData, showImages: '' })),
    setShowImages: (urls) => set(() => ({ showImages: [...urls] })),
    receiveData: (data) => set(() => ({ formData: data, showImages: data.product_image })),
    resetFormData: () => set(() => ({ formData: initialFormData, showImages: [] })),
  },
}));

export const useFormData = () => useFormDataStore((state) => state.formData);
export const useShowImages = () => useFormDataStore((state) => state.showImages);
export const useFormDataActions = () => useFormDataStore((state) => state.actions);
