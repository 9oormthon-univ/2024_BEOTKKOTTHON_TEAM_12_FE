import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';

export const useLikedMutation = (productId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => instance.post(`/products/select/${userId}/${productId}`),
    onSuccess: (res) => {
      console.log('관심 목록 등록 성공', res);
      queryClient.invalidateQueries({
        queryKey: ['products', 'product-detail', userId, productId.toString()],
      });
    },
    onError: (error) => {
      console.log('관심 목록 등록 실패', error);
    },
  });
};
