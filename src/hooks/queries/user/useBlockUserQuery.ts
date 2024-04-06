import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { blockedUserDummyData } from 'data/user';

const getBlockUserList = async () => {
  console.log('차단한 사용자 목록 불러오기');
  try {
    const response = await instance.get(`/users/blockedUsers/${userId}}`);
    console.log('차단한 사용자 목록 불러오기 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('차단한 사용자 목록 불러오기 실패:', error);
    const blockedUserData = blockedUserDummyData();
    return blockedUserData;
  }
};

export const useBlockUserQuery = () => {
  return useQuery({
    queryKey: ['user', 'block-user'],
    queryFn: getBlockUserList,
  });
};
