import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useEffect } from 'react';
import { useProductListActions } from 'store/productListData';

const getPurchaseHistory = async () => {
  try {
    const response = await instance.get(`/users/myHistory/${userId}`);
    console.log('구매 내역 불러오기 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('구매 내역 불러오기 실패:', error);
    return [
      {
        id: 5,
        price: 10000,
        product_name: '안입는 옷 처분해요',
        product_status: '아주 좋아요',
        post_status: 'soldOut',
        product_image: ['http://dummyimage.com/193x100.png/dddddd/000000'],
      },
      {
        id: 6,
        price: 10000,
        product_name: '안입는 옷 처분해요',
        product_status: '아주 좋아요',
        post_status: 'soldOut',
        product_image: ['http://dummyimage.com/150x100.png/5fa2dd/ffffff'],
      },
    ];
  }
};

export const usePurchaseHistoryQuery = () => {
  const { addProductList } = useProductListActions();

  const purchaseHistoryQuery = useQuery({
    queryKey: ['user', 'purchase-product'],
    queryFn: getPurchaseHistory,
  });

  useEffect(() => {
    if (purchaseHistoryQuery.data) {
      addProductList(purchaseHistoryQuery.data);
    }
  }, [purchaseHistoryQuery.data]);

  return purchaseHistoryQuery;
};
