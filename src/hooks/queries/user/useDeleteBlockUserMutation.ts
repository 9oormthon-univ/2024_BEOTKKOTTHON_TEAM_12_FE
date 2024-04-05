import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';

export const useDeleteBlockUserMutation = () => {
  return useMutation({
    mutationFn: (userName: string) =>
      instance.delete(`/users/blockedUsers/unBlock/${userId}`, {
        data: { blocked_user_name: userName },
      }),
    onSuccess: (res) => {
      console.log('차단 해제하기 성공:', res.data);
      alert('차단이 해제되었습니다.');
    },
    onError: (error) => {
      console.error('차단 해제하기 실패:', error);
      alert('차단을 해제하지 못했습니다. 다시 시도해주세요.');
    },
  });
};
