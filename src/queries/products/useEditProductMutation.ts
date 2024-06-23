import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from 'apis';
import { USER_ID } from 'constants/shared';
import { ProductFormDataType } from 'types/productType';

export const useEditProductMutation = (productId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (sendData: ProductFormDataType) =>
      instance.put(`/products/edit/${USER_ID}/${productId}`, sendData),
    onSuccess: (res) => {
      console.log('상품 수정에 성공했습니다.', res);
      queryClient.invalidateQueries({
        queryKey: ['products', 'product-detail', USER_ID, productId],
      });
      alert('상품 수정에 성공했습니다.');
    },
    onError: (error) => {
      console.log('상품 수정에 실패했습니다.', error);
      alert('상품 수정에 실패했습니다.');
    },
  });
};
