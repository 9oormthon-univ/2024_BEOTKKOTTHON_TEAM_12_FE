import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useNavigate } from 'react-router-dom';

export const useDeleteMutation = (id: string) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => instance.delete(`/products/delete/${userId}/${id}`),
    onSuccess: (res) => {
      console.log('글 삭제 성공', res);
      alert('게시물을 삭제했습니다.');
      navigate('/product');
    },
    onError: (error) => {
      console.log('글 숨기기 실패', error);
      alert('게시물을 삭제하지 못했습니다.');
    },
  });
};
