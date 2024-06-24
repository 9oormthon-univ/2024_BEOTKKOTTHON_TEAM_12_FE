import { useMutation, useQueryClient } from '@tanstack/react-query';
import USER_API from 'apis/userApi';

export const usePostSalesCompletedMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: number) => USER_API.putSalesCompleted(productId),
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
