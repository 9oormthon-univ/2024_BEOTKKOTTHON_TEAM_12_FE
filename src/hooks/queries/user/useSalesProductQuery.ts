import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useEffect } from 'react';
import { useProductListActions } from 'store/productListData';

const getSalesProducts = async () => {
  try {
    const response = await instance.get(`/users/myProducts/onSale/${userId}`);
    console.log('판매중인 상품 불러오기 성공:', response.data);
    return response.data;
  } catch (error) {
    console.log('판매중 데이터 불러오기 실패', error);
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

export const useSalesProductQuery = () => {
  const { setInitialProductList } = useProductListActions();

  const salesProductQuery = useQuery({
    queryKey: ['user', 'sales-product'],
    queryFn: getSalesProducts,
  });

  useEffect(() => {
    if (salesProductQuery.data) {
      setInitialProductList(salesProductQuery.data);
    }
  }, [salesProductQuery.data]);

  return salesProductQuery;
};
