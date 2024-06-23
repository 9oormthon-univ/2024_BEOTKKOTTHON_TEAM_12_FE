import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { USER_ID } from 'constants/shared';
import { SetStateAction, useEffect } from 'react';

const getUserProfileData = async () => {
  try {
    const response = await instance.get(`/users/profile/${USER_ID}`);
    console.log('프로필 정보 불러오기 성공', response.data);
    return response.data;
  } catch (e: any) {
    console.error('프로필 정보 불러오기 실패', e);
    throw new Error(e.response?.data?.message);
  }
};

export const useProfileEditQuery = (
  setUserInfo: React.Dispatch<
    SetStateAction<{
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
