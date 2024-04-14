import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useEffect } from 'react';
import { useFormDataActions } from 'store/productFormData';
import { useProductListActions } from 'store/productListData';

const getProductEditData = async (productId: string) => {
  try {
    const response = await instance.get(`/products/edit/${userId}/${productId}`);
    console.log('상품 수정페이지 데이터 가져오기 성공', response.data);
    return response.data;
  } catch (error) {
    console.log('상품 수정페이지 데이터 가져오기 실패', error);
  }
};

export const useProductEditQuery = (productId: string) => {
  const { receiveProductFormData } = useFormDataActions();
  const { setActiveCategory } = useProductListActions();

  const productEditQuery = useQuery({
    queryKey: ['products', 'edit', productId],
    queryFn: () => getProductEditData(productId),
  });

  useEffect(() => {
    if (productEditQuery.data) {
      receiveProductFormData(productEditQuery.data);
      setActiveCategory(productEditQuery.data.category_name);
    }
  }, [productEditQuery.data]);

  return productEditQuery;
};
