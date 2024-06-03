import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';

export const useUnblockMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (blockedUserId: string) =>
      instance.delete(`/users/blockedUsers/unBlock/${userId}/${blockedUserId}`),
    onSuccess: (response) => {
      console.log('차단을 해제하였습니다.', response);
      queryClient.invalidateQueries({ queryKey: ['user', 'block-user'] });
      alert('차단을 해제하였습니다.');
    },
    onError: (error) => {
      console.log('차단을 해제하지 못했습니다.', error);
      alert('차단을 해제하지 못했습니다.');
    },
  });
};
