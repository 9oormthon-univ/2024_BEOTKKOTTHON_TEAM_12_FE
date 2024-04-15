import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';

const getBlockUserList = async () => {
  console.log('차단한 사용자 목록 불러오기');
  try {
    const response = await instance.get(`/users/blockedUsers/${userId}?pageNumber=0`);
    console.log('차단한 사용자 목록 불러오기 성공:', response.data.content);
    return response.data.content;
  } catch (error: any) {
    console.error('차단한 사용자 목록 불러오기 실패:', error);
    throw new Error(error.response?.data?.message);
  }
};

export const useBlockUserQuery = () => {
  return useQuery({
    queryKey: ['user', 'block-user'],
    queryFn: getBlockUserList,
  });
};
