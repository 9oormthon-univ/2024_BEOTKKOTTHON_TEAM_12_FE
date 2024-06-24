import { useMutation, useQueryClient } from '@tanstack/react-query';
import PRODUCT_API from 'apis/productApi';
import { USER_ID } from 'constants/shared';

export const useTagDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (searchName: string) => PRODUCT_API.DELETE.tag(searchName),
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
