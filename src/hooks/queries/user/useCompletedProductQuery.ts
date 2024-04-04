import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useEffect } from 'react';
import { useProductListActions } from 'store/productListData';

const getCompletedProducts = async () => {
  try {
    const response = await instance.get(`/users/myProducts/soldOut/${userId}`);
    console.log('판매완료 상품 불러오기 성공:', response.data);
    return response.data;
  } catch (error) {
    console.log('판매완료 데이터 불러오기 실패', error);
    return [
      {
        id: 4,
        price: 10000,
        product_name: 'H&M 티셔츠팔아요',
        product_status: '아주 좋아요',
        post_status: 'soldOut',
        product_image: ['http://dummyimage.com/161x100.png/ff4444/ffffff'],
      },
    ];
  }
};

export const useCompletedProductQuery = () => {
  const { setInitialProductList } = useProductListActions();

  const completedProductQuery = useQuery({
    queryKey: ['user', 'completed-product'],
    queryFn: getCompletedProducts,
  });

  useEffect(() => {
    if (completedProductQuery.data) {
      console.log('completedProductQuery.data', completedProductQuery.data);

      setInitialProductList(completedProductQuery.data);
    }
  }, [completedProductQuery.data]);

  return completedProductQuery;
};
