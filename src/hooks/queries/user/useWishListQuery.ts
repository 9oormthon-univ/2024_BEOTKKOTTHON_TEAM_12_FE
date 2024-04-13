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
  } catch (error) {
    console.log('찜 목록 상품 데이터 불러오기 실패', error);
    return [
      {
        id: 2,
        price: 10000,
        product_name: '안입는 옷 처분해요',
        product_status: '아주 좋아요',
        post_status: 'onSale',
        product_image: ['http://dummyimage.com/193x100.png/dddddd/000000'],
      },
    ];
  }
};

export const useWishListQuery = () => {
  const { setInitialProductList } = useProductListActions();

  const wishListQuery = useQuery({
    queryKey: ['user', 'wish-list'],
    queryFn: getWishListData,
  });

  useEffect(() => {
    if (wishListQuery.data) {
      console.log('찜 목록', wishListQuery.data);
      setInitialProductList(wishListQuery.data);
    }
  }, [wishListQuery.data]);

  return wishListQuery;
};
