import { create } from 'zustand';

interface SigninData {
  userId: string;
  password: string;
  validPassword: string;
  universityName: string;
  universityEmail: string;
  styleTags: string[];
}

interface SigninDataActions {
  setSignInFormData: (data: Partial<SigninData>) => void;
}

interface SigninDataStore extends SigninData {
  actions: SigninDataActions;
}

const initialSigninData: SigninData = {
  userId: '',
  password: '',
  validPassword: '',
  universityName: '',
  universityEmail: '',
  styleTags: [],
};

export const useSigninFormDataStore = create<SigninDataStore>((set) => ({
  ...initialSigninData, // 초기 상태 객체를 스프레드 연산자로 사용하여 복사
  actions: {
    setSignInFormData: (data) => set((state) => ({ ...state, ...data })),
  },
}));

// 상태값 가져오기
export const useSigninFormData = () => useSigninFormDataStore();
// 액션 가져오기
export const useSigninFormActions = () => useSigninFormDataStore().actions;
