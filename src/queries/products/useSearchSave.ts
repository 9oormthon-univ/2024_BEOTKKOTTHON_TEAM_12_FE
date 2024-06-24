import { useMutation } from '@tanstack/react-query';
import PRODUCT_API from 'apis/productApi';

export const useSearchSave = () => {
  return useMutation({
    mutationFn: (searchName: string) => PRODUCT_API.POST.searchSave(searchName),
    onSuccess: (res) => {
      console.log('최근 검색어 저장 성공', res);
    },
    onError: (error) => {
      console.log('최근 검색어 저장 실패', error);
    },
  });
};
