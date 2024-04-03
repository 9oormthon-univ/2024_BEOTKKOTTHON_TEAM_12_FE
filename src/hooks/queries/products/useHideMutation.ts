import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useNavigate } from 'react-router-dom';

export const useHideMutation = (id: string) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () =>
      instance.put(`/products/private/${userId}/${id}`, {
        is_private: true,
      }),
    onSuccess: (res) => {
      console.log('글 숨기기 성공', res);
      alert('게시물을 정상적으로 숨겼습니다.');
      navigate('/product');
    },
    onError: (error) => {
      console.log('글 숨기기 실패', error);
      alert('게시물을 숨기지 못했습니다.');
    },
  });
};
