import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';

export const useTagDelete = () => {
  return useMutation({
    mutationFn: (searchName: string) =>
      instance.delete(`/products/search/delete?userId=${userId}&searchName=${searchName}`),
    onSuccess: (res) => {
      console.log('태그 삭제 성공', res);
    },
    onError: (error) => {
      console.log('태그 삭제에 실패했습니다.', error);
      alert('태그 삭제에 실패했습니다.');
    },
  });
};
