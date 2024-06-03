import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { accountUserDummyData } from 'data/user';
import { SetStateAction, useEffect } from 'react';

const getAccountInfo = async () => {
  try {
    const response = await instance.get(`/users/userInfo/${userId}`);
    console.log('계정 정보 불러오기 성공:', response.data);
    return response.data;
  } catch (e) {
    console.error('계정 정보 불러오기 실패', e);
    const accountData = accountUserDummyData();
    return accountData;
  }
};

export const useAccountInfoQuery = (
  setAccountInfo: React.Dispatch<
    SetStateAction<{
      user_name: string;
      university_name: string;
      university_email: string;
    }>
  >
) => {
  const accountInfoQuery = useQuery({
    queryKey: ['user', 'account-info'],
    queryFn: getAccountInfo,
  });

  useEffect(() => {
    if (accountInfoQuery.data) {
      setAccountInfo({
        user_name: accountInfoQuery.data.user_name,
        university_name: accountInfoQuery.data.university_name,
        university_email: accountInfoQuery.data.university_email,
      });
    }
  }, [accountInfoQuery.data]);

  return accountInfoQuery;
};
