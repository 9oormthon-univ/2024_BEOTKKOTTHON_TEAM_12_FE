import { useMutation, useQueryClient } from '@tanstack/react-query';
import PRODUCT_API from 'apis/productApi';
import { USER_ID } from 'constants/shared';

export const useUnlikedMutation = (productId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => PRODUCT_API.DELETE.unliked(productId),
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
