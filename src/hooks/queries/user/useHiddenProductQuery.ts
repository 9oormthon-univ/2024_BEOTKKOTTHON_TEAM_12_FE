import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useEffect } from 'react';
import { useProductListActions } from 'store/productListData';

const getHiddenProducts = async () => {
  try {
    const response = await instance.get(`/users/myProducts/private/${userId}`);
    console.log('숨김 상품 불러오기 성공:', response.data);
    return response.data;
  } catch (error) {
    console.log('숨김 상품 불러오기 실패', error);
    return [
      {
        id: 3,
        price: 10000,
        product_name: 'ZARA 티셔츠 팔아요',
        product_status: '아주 좋아요',
        post_status: 'hidden',
        product_image: ['http://dummyimage.com/150x100.png/5fa2dd/ffffff'],
      },
    ];
  }
};

export const useHiddenProductQuery = () => {
  const { setInitialProductList } = useProductListActions();

  const hiddenProductQuery = useQuery({
    queryKey: ['user', 'hidden-product'],
    queryFn: getHiddenProducts,
  });

  useEffect(() => {
    if (hiddenProductQuery.data) {
      console.log('hiddenProductQuery.data', hiddenProductQuery.data);

      setInitialProductList(hiddenProductQuery.data);
    }
  }, [hiddenProductQuery.data]);

  return hiddenProductQuery;
};
