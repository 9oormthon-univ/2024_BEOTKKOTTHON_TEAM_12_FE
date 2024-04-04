import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';

export const usePostSalesCompletedMutation = () => {
  return useMutation({
    mutationFn: (productId: number) =>
      instance.put(`/users/myProducts/onSale/${userId}`, {
        id: productId,
        post_status: 'soldOut',
      }),
    onSuccess: (response) => {
      console.log('상품 상태를 변경했습니다.', response);
      alert('상품 상태를 변경했습니다.');
      // getSalesProducts();
      // getSalesCompletedProducts();
    },
    onError: (error) => {
      console.log('상품 상태를 변경하지 못했습니다.', error);
      alert('상품 상태를 변경하지 못했습니다.');
    },
  });
};
