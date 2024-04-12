import { TradeFormData } from 'types/types';
import { create } from 'zustand';

interface Actions {
  setFormData: (name: string, value: string | number) => void;
  setShowImages: (urls: string[]) => void;
  receiveData: (data: TradeFormData) => void;
  resetFormData: () => void;
}

interface FormDataStore {
  formData: TradeFormData;
  showImages: string[];
  actions: Actions;
}

const initialFormData = {
  product_name: '',
  price: 0,
  product_image: [],
  product_content: '',
  product_status: '',
  place: '',
  category_name: '',
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
    resetFormData: () => set(() => ({ formData: initialFormData, showImages: [] })),
  },
}));

export const useFormData = () => useFormDataStore((state) => state.formData);
export const useShowImages = () => useFormDataStore((state) => state.showImages);
export const useFormDataActions = () => useFormDataStore((state) => state.actions);
