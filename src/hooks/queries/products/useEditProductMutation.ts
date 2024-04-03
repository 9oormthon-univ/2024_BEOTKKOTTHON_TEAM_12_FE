import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { TradeFormData } from 'types/types';

export const useEditProductMutation = (id: string) => {
  return useMutation({
    mutationFn: (sendData: TradeFormData) =>
      instance.put(`/products/edit/${userId}/${id}`, sendData),
    onSuccess: (res) => {
      console.log('상품 수정에 성공했습니다.', res);
      alert('상품 수정에 성공했습니다.');
    },
    onError: (error) => {
      console.log('상품 수정에 실패했습니다.', error);
      alert('상품 수정에 실패했습니다.');
    },
  });
};
