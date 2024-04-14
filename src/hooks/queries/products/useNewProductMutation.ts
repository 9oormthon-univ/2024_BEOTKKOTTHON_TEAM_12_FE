import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { ProductFormDataType } from 'types/productType';

export const useNewProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (sendData: ProductFormDataType) =>
      instance.post(`/products/new/${userId}`, sendData),
    onSuccess: (res) => {
      console.log('상품 등록에 성공했습니다.', res);
      queryClient.invalidateQueries({
        queryKey: ['products', '전체', null],
      });
      alert('상품 등록에 성공했습니다.');
    },
    onError: (error) => {
      console.log('상품 등록에 실패했습니다.', error);
      alert('상품 등록에 실패했습니다.');
    },
  });
};
