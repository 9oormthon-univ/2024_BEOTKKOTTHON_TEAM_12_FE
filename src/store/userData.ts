import { create } from 'zustand';
import noImg from '../assets/images/profile-no-image.png';
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
  user_name: '',
  nick_name: '',
  university_name: '',
  style: [],
  profile_image: noImg,
  level: '',
  next_level: '',
  point: 0,
  remain_level_point: 0,
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
