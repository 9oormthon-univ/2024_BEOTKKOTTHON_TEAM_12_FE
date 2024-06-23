import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from 'apis';
import { USER_ID } from 'constants/shared';

export const usePostSalesCompletedMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: number) =>
      instance.put(`/users/myProducts/onSale/${USER_ID}`, {
        id: productId,
        post_status: 'soldOut',
      }),
    onSuccess: (response) => {
      console.log('상품 상태를 변경했습니다.', response);
      queryClient.invalidateQueries({ queryKey: ['user', 'sales-product'] });
      alert('상품 상태를 변경했습니다.');
    },
    onError: (error) => {
      console.log('상품 상태를 변경하지 못했습니다.', error);
      alert('상품 상태를 변경하지 못했습니다.');
    },
  });
};
