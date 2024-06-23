import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { USER_ID } from 'constants/shared';
import { useEffect } from 'react';
import { useUserProfileActions } from 'store/userData';

const getUserData = async () => {
  try {
    const response = await instance.get(`/users/${USER_ID}`);
    console.log('마이페이지 불러오기 성공', response);
    return response.data;
  } catch (e: any) {
    console.error('마이페이지 불러오기 실패', e);
    throw new Error(e.response?.data?.message);
  }
};

export const useMypageMainQuery = () => {
  const { updateUserProfileInfo } = useUserProfileActions();

  const mypageMainQuery = useQuery({
    queryKey: ['user'],
    queryFn: getUserData,
  });

  useEffect(() => {
    if (mypageMainQuery.data) {
      updateUserProfileInfo(mypageMainQuery.data);
    }
  }, [mypageMainQuery.data]);

  return mypageMainQuery;
};
