import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { levelUrlArr } from 'utils/levelUrlArr';

const getBlockUserList = async () => {
  console.log('차단한 사용자 목록 불러오기');
  try {
    const response = await instance.get(`/users/blockedUsers/${userId}}`);
    console.log('차단한 사용자 목록 불러오기 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('차단한 사용자 목록 불러오기 실패:', error);
    return [
      {
        blocked_user_id: 1,
        blocked_user_name: '김스옹',
        levelImg: levelUrlArr('목화'),
        blocked_user_profile_image: 'http://dummyimage.com/161x100.png/ff4444/ffffff',
      },
      {
        blocked_user_id: 1,
        blocked_user_name: '김스옹',
        levelImg: levelUrlArr('목화'),
        blocked_user_profile_image: 'http://dummyimage.com/161x100.png/ff4444/ffffff',
      },
    ];
  }
};

export const useBlockUserQuery = () => {
  return useQuery({
    queryKey: ['user', 'block-user'],
    queryFn: getBlockUserList,
  });
};
