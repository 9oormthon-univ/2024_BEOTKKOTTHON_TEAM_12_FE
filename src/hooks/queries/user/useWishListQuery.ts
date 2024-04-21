import { useInfiniteQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useEffect } from 'react';
import { useProductListActions } from 'store/productListData';

const getWishListData = async (pageParam: number) => {
  try {
    const response = await instance.get(`/users/wishList/${userId}?pageNumber=${pageParam}`);
    console.log('찜 목록 상품 불러오기 성공:', response.data);
    return response.data;
  } catch (error: any) {
    console.log('찜 목록 상품 데이터 불러오기 실패', error);
    throw new Error(error.response?.data?.message);
  }
};

export const useWishListQuery = () => {
  const { addProductList } = useProductListActions();

  const wishListQuery = useInfiniteQuery({
    queryKey: ['user', 'wish-list'],
    queryFn: ({ pageParam }) => getWishListData(pageParam),
    select: (data) => {
      return {
        pagesData: data?.pages.flatMap((page) => page.content),
        pageParams: data?.pageParams,
        totalElements: data?.pages?.[0]?.totalElements,
      };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.last) return lastPage.number + 1;
      return undefined;
    },
  });

  useEffect(() => {
    if (wishListQuery.data) {
      addProductList(wishListQuery.data.pagesData);
    }
  }, [wishListQuery.data]);

  return wishListQuery;
};
