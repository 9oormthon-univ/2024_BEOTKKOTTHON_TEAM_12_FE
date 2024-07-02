import { AccountInfoType } from 'types/userType';
import { create } from 'zustand';

interface Actions {
  setAccountInfo: (obj: AccountInfoType) => void;
  setUserName: (str: string) => void;
  setUniversityName: (str: string) => void;
  setUniversityEmail: (str: string) => void;
}

interface ProductsStore {
  accountInfo: AccountInfoType;
  actions: Actions;
}

export const useProductStore = create<ProductsStore>((set) => ({
  accountInfo: {
    user_name: '',
    university_name: '',
    university_email: '',
  },
  actions: {
    setAccountInfo: (obj: AccountInfoType) => set(() => ({ accountInfo: { ...obj } })),
    setUserName: (str: string) =>
      set((state) => ({ accountInfo: { ...state.accountInfo, user_name: str } })),
    setUniversityName: (str: string) =>
      set((state) => ({ accountInfo: { ...state.accountInfo, university_name: str } })),
    setUniversityEmail: (str: string) =>
      set((state) => ({ accountInfo: { ...state.accountInfo, university_email: str } })),
  },
}));

export const useAccountInfo = () => useProductStore((state) => state.accountInfo);
export const useAccountInfoActions = () => useProductStore((state) => state.actions);
