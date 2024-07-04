import { useCustomInfiniteQuery } from 'hooks/useCustomInfiniteQuery';
import productService from './productService';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import queryKeys from './queries';
import { ProductFormDataType } from 'types/productType';
import { useProductActions } from 'store/product';

export const useProductMain = (activeCategory: string, clickedOnSale: string | null) => {
  return useCustomInfiniteQuery({
    queryKey: queryKeys.main,
    queryFn: ({ pageParam = 0 }: any) =>
      productService.GET.main(pageParam, activeCategory, clickedOnSale),
  });
};

export const useProductDetail = (productId: string) => {
  return useQuery({
    queryKey: queryKeys.detail(productId),
    queryFn: () => productService.GET.detail(productId),
  });
};

export const usePopularSearch = () => {
  return useQuery({
    queryKey: queryKeys.popularSearch(),
    queryFn: () => productService.GET.popularSearch(),
  });
};

export const useRecentSearch = () => {
  return useQuery({
    queryKey: queryKeys.recentSearch(),
    queryFn: () => productService.GET.recentSearch(),
  });
};

export const useProductEdit = (productId: string) => {
  return useQuery({
    queryKey: queryKeys.edit(productId),
    queryFn: () => productService.GET.edit(productId),
  });
};

export const useSearch = (onSale: string | null, searchName: string, activeCategory: string) => {
  return useCustomInfiniteQuery({
    queryKey: queryKeys.search(onSale, searchName, activeCategory),
    queryFn: ({ pageParam = 0 }: any) =>
      productService.GET.serach(onSale, searchName, activeCategory, pageParam),
  });
};

export const useBlock = (blockedId: number) => {
  return useMutation({
    mutationFn: () => productService.POST.block(blockedId),
    onSuccess: () => alert('사용자를 차단했습니다.'),
    onError: () => alert('사용자를 차단하지 못했습니다.'),
  });
};

export const useLiked = (productId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => productService.POST.liked(productId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.detail(productId.toString()),
      }),
  });
};

export const useNewProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (sendData: ProductFormDataType) => productService.POST.create(sendData),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.main('전체', null),
      }),
    onError: () => alert('상품 등록에 실패했습니다.'),
  });
};

export const useSearchSave = () => {
  return useMutation({
    mutationFn: (searchName: string) => productService.POST.searchSave(searchName),
    onSuccess: (res) => console.log('최근 검색어 저장 성공', res),
    onError: (error) => console.log('최근 검색어 저장 실패', error),
  });
};

export const useEdit = (productId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (sendData: ProductFormDataType) => productService.PUT.edit(productId, sendData),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.detail(productId),
      }),
    onError: () => alert('상품 수정에 실패했습니다.'),
  });
};

export const useHide = (productId: string, prevIsPrivate: boolean) => {
  return useMutation({
    mutationFn: () => productService.PUT.hide(productId),
    onSuccess: () => {
      if (prevIsPrivate) alert('게시물을 정상적으로 복구하였습니다.');
      else alert('게시물을 정상적으로 숨겼습니다.');
    },
    onError: () => alert('게시물을 숨기지 못했습니다.'),
  });
};

export const useOnSale = (id: string, status: string | undefined) => {
  return useMutation({
    mutationFn: () => productService.PUT.onSale(id, status ? true : false),
  });
};

export const useDeleteProduct = (productId: string) => {
  return useMutation({
    mutationFn: () => productService.DELETE.product(productId),
    onSuccess: () => alert('게시물을 삭제했습니다.'),
    onError: () => alert('게시물을 삭제하지 못했습니다.'),
  });
};

export const useTagAllDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => productService.DELETE.allTag(),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.recentSearch(),
      }),
    onError: () => alert('태그 전체 삭제에 실패했습니다.'),
  });
};

export const useTagDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (searchName: string) => productService.DELETE.tag(searchName),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.recentSearch(),
      }),
    onError: () => alert('태그 삭제에 실패했습니다.'),
  });
};

export const useUnliked = (productId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => productService.DELETE.unliked(productId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.detail(productId.toString()),
      }),
  });
};
