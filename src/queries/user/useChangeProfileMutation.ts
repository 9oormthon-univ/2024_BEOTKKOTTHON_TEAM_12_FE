import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { USER_ID } from 'constants/shared';

export const useChangeProfile = () => {
  return useMutation({
    mutationFn: (userInfo: any) => instance.put(`/users/profile/${USER_ID}`, userInfo),
    onSuccess: (res) => {
      console.log('프로필 수정 성공', res.data);
      alert('프로필을 수정하였습니다.');
    },
    onError: (error) => {
      console.log('프로필 수정 실패', error);
      alert('프로필을 수정하지 못했습니다.');
    },
  });
};
