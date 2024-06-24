import { useMutation, useQueryClient } from '@tanstack/react-query';
import USER_API from 'apis/userApi';

export const useUnblockMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (blockedUserId: string) => USER_API.DELETE.blockUser(blockedUserId),
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
