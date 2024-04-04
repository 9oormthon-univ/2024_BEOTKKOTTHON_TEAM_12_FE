import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';

export const useChangeAccountMutation = () => {
  return useMutation({
    mutationFn: (accountInfo) =>
      instance.put(`/users/userInfo/update/${userId}`, {
        accountInfo,
      }),
    onSuccess: () => {
      alert('저장되었습니다.');
    },
    onError: (error) => {
      console.log('저장하지 못했습니다. 다시 시도해주세요.', error);
      alert('저장하지 못했습니다. 다시 시도해주세요.');
    },
  });
};
