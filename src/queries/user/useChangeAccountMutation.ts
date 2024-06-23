import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { USER_ID } from 'constants/shared';

export const useChangeAccountMutation = () => {
  return useMutation({
    mutationFn: (accountInfo) =>
      instance.put(`/users/userInfo/update/${USER_ID}`, {
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
