import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from 'apis';
import { USER_ID } from 'constants/shared';

export const useTagDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (searchName: string) =>
      instance.delete(`/products/search/delete?userId=${USER_ID}&searchName=${searchName}`),
    onSuccess: (res) => {
      console.log('태그 삭제 성공', res);
      queryClient.invalidateQueries({
        queryKey: ['products', 'recent-search', USER_ID],
      });
    },
    onError: (error) => {
      console.log('태그 삭제에 실패했습니다.', error);
      alert('태그 삭제에 실패했습니다.');
    },
  });
};
