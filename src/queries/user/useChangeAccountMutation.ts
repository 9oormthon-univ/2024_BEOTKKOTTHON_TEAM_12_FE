import { useMutation } from '@tanstack/react-query';
import USER_API from 'apis/userApi';
import { AccountInfoType } from 'types/userType';

export const useChangeAccountMutation = () => {
  return useMutation({
    mutationFn: (accountInfo: AccountInfoType) => USER_API.putChangedAccountInfo(accountInfo),
    onSuccess: () => {
      alert('저장되었습니다.');
    },
    onError: (error) => {
      console.log('저장하지 못했습니다. 다시 시도해주세요.', error);
      alert('저장하지 못했습니다. 다시 시도해주세요.');
    },
  });
};
