import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';

export const useUnlikedMutation = () => {
  return useMutation({
    mutationFn: (productId: number) => instance.delete(`/products/deselect/${userId}/${productId}`),
    onSuccess: (res) => {
      console.log('관심 목록 취소 성공', res);
    },
    onError: (error) => {
      console.log('관심 목록 취소 실패', error);
    },
  });
};
