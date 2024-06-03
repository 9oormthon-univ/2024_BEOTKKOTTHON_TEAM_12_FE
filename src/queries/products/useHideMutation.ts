import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useProduct } from 'store/product';

export const useHideMutation = (productId: string) => {
  const product = useProduct();
  const prevIsPrivate = product?.is_private;

  return useMutation({
    mutationFn: () => instance.put(`/products/private/${userId}/${productId}`),
    onSuccess: (res) => {
      if (prevIsPrivate) {
        console.log('글 숨기기 취소', res);
        alert('게시물을 정상적으로 복구하였습니다.');
      } else {
        console.log('글 숨기기 성공', res);
        alert('게시물을 정상적으로 숨겼습니다.');
      }
    },
    onError: (error) => {
      console.log('글 숨기기 실패', error);
      alert('게시물을 숨기지 못했습니다.');
    },
  });
};
