import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from 'apis';
import { USER_ID } from 'constants/shared';

export const useUnlikedMutation = (productId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => instance.delete(`/products/deselect/${USER_ID}/${productId}`),
    onSuccess: (res) => {
      console.log('관심 목록 취소 성공', res);
      queryClient.invalidateQueries({
        queryKey: ['products', 'product-detail', USER_ID, productId.toString()],
      });
    },
    onError: (error) => {
      console.log('관심 목록 취소 실패', error);
    },
  });
};
