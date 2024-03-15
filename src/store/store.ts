import create from 'zustand';
import noImg from '../assets/images/profile-no-image.png';

interface UserProfileInfo {
  name: string;
  university: string;
  level: string;
  nickName: string;
  image: string;
  styleTag: string[];
}

interface StoreState {
  userProfileInfo: UserProfileInfo;
  updateUserProfileInfo: (newProfile: Partial<UserProfileInfo>) => void;
}

const useStore = create<StoreState>((set) => ({
  userProfileInfo: {
    name: '김서영',
    university: '성균관대학교 서울캠퍼스',
    level: '새싹',
    nickName: '김서영',
    image: noImg,
    styleTag: ['페미닌', '빈티지', '캐주얼'],
  },
  updateUserProfileInfo: (newProfile) =>
    set((state) => ({
      userProfileInfo: { ...state.userProfileInfo, ...newProfile },
    })),

  updateUserStyleTags: (styleTags: string[]) =>
    set((state) => ({
      userProfileInfo: { ...state.userProfileInfo, styleTag: styleTags },
    })),
}));

export default useStore;
