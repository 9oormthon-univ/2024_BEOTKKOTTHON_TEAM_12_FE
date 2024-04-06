import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { profileUserDummyData } from 'data/user';
import { SetStateAction, useEffect } from 'react';

const getUserProfileData = async () => {
  try {
    const response = await instance.get(`/users/profile/${userId}`);
    console.log('프로필 정보 불러오기 성공', response.data);
    return response.data;
  } catch (e) {
    console.error('프로필 정보 불러오기 실패', e);
    const profileData = profileUserDummyData();
    return profileData;
  }
};

export const useProfileEditQuery = (
  setUserInfo: React.Dispatch<
    SetStateAction<{
      user_name: string;
      nick_name: string;
      profile_image: string[];
      style: string[];
    }>
  >
) => {
  const profileEditQuery = useQuery({
    queryKey: ['user', 'profile-edit'],
    queryFn: getUserProfileData,
  });

  useEffect(() => {
    if (profileEditQuery.data) {
      setUserInfo({ ...profileEditQuery.data });
    }
  }, [profileEditQuery.data]);

  return profileEditQuery;
};
