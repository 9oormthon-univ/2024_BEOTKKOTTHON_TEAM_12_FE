import { create } from 'zustand';

interface Actions {
  setFormData: (name: string, value: string | number | FileList) => void;
  setCharityNumber: (num: number) => void;
}

interface DonationStore {
  formData: {
    name: string;
    addr1: string;
    addr2: string;
    phone1: string;
    phone2: string;
    phone3: string;
    email1: string;
    email2: string;
    sort: string;
    clothes_num: number;
    goods_num: number;
    box_num: number;
  };
  charityNumber: number;
  actions: Actions;
}

const initialFormData = {
  name: '김고은',
  addr1: '서울특별시 서대문구',
  addr2: '웨어아파트 101동 101호',
  phone1: '010',
  phone2: '1234',
  phone3: '1234',
  email1: 'wear',
  email2: 'wear.com',
  sort: '상의',
  clothes_num: 18,
  goods_num: 5,
  box_num: 2,
};

export const useDonationStore = create<DonationStore>((set) => ({
  formData: initialFormData,
  charityNumber: 1,
  actions: {
    setFormData: (name, value) => {
      set((state) => ({
        formData: { ...state.formData, [name]: value },
      }));
    },
    setCharityNumber: (num) => {
      set(() => ({
        charityNumber: num,
      }));
    },
  },
}));

export const useDonationForm = () => useDonationStore((state) => state.formData);
export const useCharityNumber = () => useDonationStore((state) => state.charityNumber);
export const useDonationFormActions = () => useDonationStore((state) => state.actions);
