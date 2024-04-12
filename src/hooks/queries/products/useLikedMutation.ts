import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';

export const useLikedMutation = () => {
  return useMutation({
    mutationFn: (productId: number) => instance.post(`/products/select/${userId}/${productId}`),
    onSuccess: (res) => {
      console.log('관심 목록 등록 성공', res);
    },
    onError: (error) => {
      console.log('관심 목록 등록 실패', error);
    },
  });
};
