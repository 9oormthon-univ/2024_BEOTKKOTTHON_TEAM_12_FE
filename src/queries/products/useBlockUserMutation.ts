import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useNavigate } from 'react-router-dom';

export const useBlockUserMutation = (blockedUserId: number) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => instance.post(`/products/block/${userId}/${blockedUserId}`),
    onSuccess: (res) => {
      console.log('사용자를 차단했습니다.', res);
      alert('사용자를 차단했습니다.');
      navigate(-1);
    },
    onError: (error) => {
      console.log('사용자를 차단하지 못했습니다.', error);
      alert('사용자를 차단하지 못했습니다.');
    },
  });
};
