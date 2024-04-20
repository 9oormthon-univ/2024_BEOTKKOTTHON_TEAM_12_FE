import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useEffect } from 'react';
import { useProductListActions } from 'store/productListData';

const getWishListData = async () => {
  try {
    const response = await instance.get(`/users/wishList/${userId}?pageNumber=0`);
    console.log('찜 목록 상품 불러오기 성공:', response.data);

    return response.data.content;
  } catch (error: any) {
    console.log('찜 목록 상품 데이터 불러오기 실패', error);
    throw new Error(error.response?.data?.message);
  }
};

export const useWishListQuery = () => {
  const { addProductList } = useProductListActions();

  const wishListQuery = useQuery({
    queryKey: ['user', 'wish-list'],
    queryFn: getWishListData,
  });

  useEffect(() => {
    if (wishListQuery.data) {
      console.log('찜 목록', wishListQuery.data);
      addProductList(wishListQuery.data);
    }
  }, [wishListQuery.data]);

  return wishListQuery;
};
