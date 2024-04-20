import { SigninFormDataType } from 'types/userType';
import { create } from 'zustand';

interface SigninDataActions {
  changeSigninFormData: (name: string, value: string | number | FileList) => void;
  changeStyleTags: (newStyle: string[]) => void;
  setIsValidPassword: (bool: boolean) => void;
  setIsEmailValid: (bool: boolean) => void;
  setIsDisabled: (bool: boolean) => void;
  resetSigninFormData: () => void;
}

interface SigninDataStore {
  signinFormData: SigninFormDataType;
  isValidPassword: boolean;
  isEmailValid: boolean;
  isDisabled: boolean;
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
  isDisabled: true,
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
    setIsDisabled: (bool) => {
      set(() => ({ isDisabled: bool }));
    },
    changeStyleTags: (newStyle) => {
      set((state) => ({
        signinFormData: { ...state.signinFormData, styleTags: newStyle },
      }));
    },
    resetSigninFormData: () => {
      set(() => ({
        signinFormData: initialSigninData,
        isValidPassword: false,
        isEmailValid: true,
        isDisabled: true,
      }));
    },
  },
}));

export const useSigninFormData = () => useSigninFormDataStore((state) => state.signinFormData);
export const useSigninIsValidPassword = () =>
  useSigninFormDataStore((state) => state.isValidPassword);
export const useSigninIsEmailValid = () => useSigninFormDataStore((state) => state.isEmailValid);
export const useSigninIsDisabled = () => useSigninFormDataStore((state) => state.isDisabled);
export const useSigninFormDataActions = () => useSigninFormDataStore((state) => state.actions);
