import { SigninFormDataType } from 'types/userType';
import { create } from 'zustand';

interface SigninDataActions {
  changeSigninFormData: (name: string, value: string | number | FileList) => void;
  changeStyleTags: (newStyle: string[]) => void;
  setIsValidPassword: (bool: boolean) => void;
  setIsEmailValid: (bool: boolean) => void;
}

interface SigninDataStore {
  signinFormData: SigninFormDataType;
  isValidPassword: boolean;
  isEmailValid: boolean;
  actions: SigninDataActions;
}

const initialSigninData: SigninFormDataType = {
  userId: '',
  password: '',
  validPassword: '',
  universityName: '',
  universityEmail: '',
  styleTags: [],
};

export const useSigninFormDataStore = create<SigninDataStore>((set) => ({
  signinFormData: initialSigninData,
  isValidPassword: false,
  isEmailValid: true,
  actions: {
    changeSigninFormData: (name, value) => {
      set((state) => ({
        signinFormData: { ...state.signinFormData, [name]: value },
      }));
    },
    setIsValidPassword: (bool) => {
      set(() => ({ isValidPassword: bool }));
    },
    setIsEmailValid: (bool) => {
      set(() => ({ isEmailValid: bool }));
    },
    changeStyleTags: (newStyle) => {
      set((state) => ({
        signinFormData: { ...state.signinFormData, styleTags: newStyle },
      }));
    },
  },
}));

export const useSigninFormData = () => useSigninFormDataStore((state) => state.signinFormData);
export const useSigninIsValidPassword = () =>
  useSigninFormDataStore((state) => state.isValidPassword);
export const useSigninIsEmailValid = () => useSigninFormDataStore((state) => state.isEmailValid);
export const useSigninFormDataActions = () => useSigninFormDataStore((state) => state.actions);
