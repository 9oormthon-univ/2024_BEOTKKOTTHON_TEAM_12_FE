import { create } from 'zustand';
import { UserProfileInfo } from 'types/types';

interface UserProfileInfoActions {
  updateUserProfileInfo: (newProfile: Partial<UserProfileInfo>) => void;
  updateUserStyleTags: (styleTags: string[]) => void;
}

interface StoreState {
  userProfileInfo: UserProfileInfo;
  actions: UserProfileInfoActions;
}

const initialUser = {
  id: 1,
  created_at: '2024-04-05 19:31:36',
  deleted_at: null,
  updated_at: '2024-04-05 19:31:36',
  level: '씨앗',
  nick_name: '미정',
  point: 0,
  profile_image: [
    'https://wear-bucket.s3.ap-northeast-2.amazonaws.com/bf75da33ff907c43387feb5496922eb4.jpg',
  ],
  university_name: '한성대학교',
  university_email: '2271224@hansung.ac.kr',
  user_name: '박미정',
  user_password: 'wearpassword',
  user_created_id: 'wearid',
};

const useStore = create<StoreState>((set) => ({
  userProfileInfo: initialUser,
  actions: {
    updateUserProfileInfo: (newProfile) =>
      set((state) => ({
        userProfileInfo: { ...state.userProfileInfo, ...newProfile },
      })),
    updateUserStyleTags: (styleTags) =>
      set((state) => ({
        userProfileInfo: { ...state.userProfileInfo, style: styleTags },
      })),
  },
}));

export const useUserProfileInfo = () => useStore((state) => state.userProfileInfo);
export const useUserProfileActions = () => useStore((state) => state.actions);

export default useStore;
