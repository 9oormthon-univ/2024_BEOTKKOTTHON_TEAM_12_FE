import { useMutation } from '@tanstack/react-query';
import PRODUCT_API from 'apis/productApi';
import { useProductActions } from 'store/product';
import { ProductDetailItem } from 'types/productType';

const putOnSaleData = async (productId: string, status: string) => {
  const isOnSale = status === 'onSale';

  try {
    const response = await PRODUCT_API.PUT.onSale(productId, isOnSale);
    if (isOnSale) {
      console.log('판매 완료 변경 성공', response);
      alert('판매 완료로 변경하였습니다.');
    } else {
      console.log('판매 중으로 변경 성공', response);
      alert('판매 중으로 변경하였습니다.');
    }
  } catch (error) {
    if (isOnSale) {
      console.log('판매 완료 변경 실패', error);
    } else {
      console.log('판매 중으로 변경 실패', error);
    }
  }
};

export const useOnSaleMutation = (id: string, product: ProductDetailItem) => {
  const { updateOnSale } = useProductActions();

  return useMutation({
    mutationFn: () => putOnSaleData(id, product.post_status),
    onSuccess: () => updateOnSale(product?.post_status === 'onSale' ? 'soldOut' : 'onSale'),
  });
};
