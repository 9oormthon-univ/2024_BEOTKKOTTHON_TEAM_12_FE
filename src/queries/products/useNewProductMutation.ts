import { useMutation, useQueryClient } from '@tanstack/react-query';
import PRODUCT_API from 'apis/productApi';
import { ProductFormDataType } from 'types/productType';

export const useNewProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (sendData: ProductFormDataType) => PRODUCT_API.POST.create(sendData),
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
