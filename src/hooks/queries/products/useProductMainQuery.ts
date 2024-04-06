import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { productMainDummyData } from 'data/product';
import { loginUserDummyData } from 'data/user';
import { useEffect } from 'react';
import { useActiveCategory, useClickedOnSale, useProductListActions } from 'store/productListData';

const getProductListData = async (category: string, onSale: string | null, id: string) => {
  try {
    const response = await instance.get(
      `/prodoucts/cateogry/${
        onSale === 'onSale' ? `sale?` : ``
      }categoryName=${category}&userId=${id}`
    );
    console.log('물품 리스트 불러오기 성공', response);
    return response.data.content;
  } catch (e) {
    console.log('물품 리스트 불러오기 실패 ', e);
    const productData = productMainDummyData();
    return productData;
  }
};

export const useProductMainQuery = () => {
  const clickedOnSale = useClickedOnSale();
  const activeCategory = useActiveCategory();
  const { user_created_id } = loginUserDummyData();
  const { setInitialProductList } = useProductListActions();

  const productMainQuery = useQuery({
    queryKey: ['products', activeCategory, clickedOnSale],
    queryFn: () => getProductListData(activeCategory, clickedOnSale, user_created_id),
  });

  useEffect(() => {
    if (productMainQuery.data) {
      setInitialProductList(productMainQuery.data);
    }
  }, [productMainQuery.data, setInitialProductList]);

  return productMainQuery;
};
