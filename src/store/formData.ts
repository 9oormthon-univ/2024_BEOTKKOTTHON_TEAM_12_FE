import { Product } from 'src/types/types';
import { create } from 'zustand';

interface Actions {
  setFormData: (name: string, value: string | number | FileList) => void;
  setShowImages: (urls: string[]) => void;
  receiveData: (data: Product) => void;
}

interface FormDataStore {
  formData: Product;
  showImages: string[];
  actions: Actions;
}

export const useFormDataStore = create<FormDataStore>((set) => ({
  formData: {
    id: '0',
    name: '',
    imgs: {} as FileList,
    category: '',
    time: '',
    state: '',
    price: 0,
    sold: '판매중',
    place: '',
  },
  showImages: [],
  actions: {
    setFormData: (name, value) =>
      set((state) => ({ formData: { ...state.formData, [name]: value } })),

    setShowImages: (urls) => set(() => ({ showImages: [...urls] })),
    receiveData: (data) => set(() => ({ formData: data, showImages: data.recievedImgUrl })),
  },
}));

export const useFormData = () => useFormDataStore((state) => state.formData);
export const useShowImages = () => useFormDataStore((state) => state.showImages);
export const useFormDataActions = () => useFormDataStore((state) => state.actions);
