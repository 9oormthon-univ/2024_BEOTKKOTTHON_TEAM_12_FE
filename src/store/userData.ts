import { create } from 'zustand';
import noImg from '../assets/images/profile-no-image.png';
import { instance } from '../apis/index';

interface UserProfileInfo {
  user_id: string;
  user_name: string;
  nick_name: string;
  university_name: string;
  style: string[];
  profile_image: string;
  level: string;
  next_level: string;
  point: number;
  remain_level_point: number;
}

interface StoreState {
  userProfileInfo: UserProfileInfo;
  updateUserProfileInfo: (newProfile: Partial<UserProfileInfo>) => void;
  updateUserStyleTags: (styleTags: string[]) => void;
  initUserProfileInfo: () => Promise<void>;
}

const useStore = create<StoreState>((set) => ({
  userProfileInfo: {
    user_id: '',
    user_name: '',
    nick_name: '',
    university_name: '',
    style: [],
    profile_image: '',
    level: '',
    next_level: '',
    point: 0,
    remain_level_point: 0,
  },
  updateUserProfileInfo: (newProfile) =>
    set((state) => ({
      userProfileInfo: { ...state.userProfileInfo, ...newProfile },
    })),
  updateUserStyleTags: (styleTags) =>
    set((state) => ({
      userProfileInfo: { ...state.userProfileInfo, style: styleTags },
    })),
  initUserProfileInfo: async () => {
    try {
      // 로그인시 받아올 userId
      const userId = localStorage.getItem('userId');
      const response = await instance.get(`/users/${userId}`);
      set({ userProfileInfo: response.data });

      console.log('마이페이지 불러오기 성공', response.data);
    } catch (error) {
      console.error('마이페이지 불러오기 실패', error);
    }
  },
}));

export const useUserProfileInfo = () => useStore((state) => state.userProfileInfo);

export default useStore;
