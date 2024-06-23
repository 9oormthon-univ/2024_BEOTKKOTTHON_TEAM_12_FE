import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { USER_ID } from 'constants/shared';

export const useSearchSave = () => {
  return useMutation({
    mutationFn: (searchName: string) =>
      instance.post(`/products/search/save?userId=${USER_ID}&searchName=${searchName}`),
    onSuccess: (res) => {
      console.log('최근 검색어 저장 성공', res);
    },
    onError: (error) => {
      console.log('최근 검색어 저장 실패', error);
    },
  });
};
