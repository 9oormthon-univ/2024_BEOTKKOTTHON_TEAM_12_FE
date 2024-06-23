import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { USER_ID } from 'constants/shared';
import { useEffect } from 'react';
import { useFormDataActions } from 'store/productFormData';
import { useProductListActions } from 'store/productListData';

const getProductEditData = async (productId: string) => {
  try {
    const response = await instance.get(`/products/edit/${USER_ID}/${productId}`);
    console.log('상품 수정페이지 데이터 가져오기 성공', response.data);
    return response.data;
  } catch (error: any) {
    console.log('상품 수정페이지 데이터 가져오기 실패', error);
    throw new Error(error.response?.data?.message);
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
