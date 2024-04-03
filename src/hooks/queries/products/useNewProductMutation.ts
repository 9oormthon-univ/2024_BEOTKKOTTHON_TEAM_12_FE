import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { TradeFormData } from 'types/types';

export const useNewProductMutation = () => {
  return useMutation({
    mutationFn: (sendData: TradeFormData) => instance.post(`/products/new/${userId}`, sendData),
    onSuccess: (res) => {
      console.log('상품 등록에 성공했습니다.', res);
      alert('상품 등록에 성공했습니다.');
    },
    onError: (error) => {
      console.log('상품 등록에 실패했습니다.', error);
      alert('상품 등록에 실패했습니다.');
    },
  });
};
