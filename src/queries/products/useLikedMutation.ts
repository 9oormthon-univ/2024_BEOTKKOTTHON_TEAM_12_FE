import { useMutation, useQueryClient } from '@tanstack/react-query';
import PRODUCT_API from 'apis/productApi';
import { USER_ID } from 'constants/shared';

export const useLikedMutation = (productId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => PRODUCT_API.POST.liked(productId),
    onSuccess: (res) => {
      console.log('관심 목록 등록 성공', res);
      queryClient.invalidateQueries({
        queryKey: ['products', 'product-detail', USER_ID, productId.toString()],
      });
    },
    onError: (error) => {
      console.log('관심 목록 등록 실패', error);
    },
  });
};
