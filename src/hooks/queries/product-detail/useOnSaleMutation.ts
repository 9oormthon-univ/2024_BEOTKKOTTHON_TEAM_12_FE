import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useProductActions } from 'store/product';
import { Product } from 'types/types';

const putOnSaleData = async (id: string, status: string) => {
  const isOnSale = status === 'onSale';
  try {
    const response = await instance.put(`/products/soldOut/${userId}`, {
      id: id,
      product_stauts: isOnSale ? 'soldOut' : 'onSale',
    });
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

export const useOnSaleMutation = (id: string, product: Product) => {
  const { updateOnSale } = useProductActions();

  return useMutation({
    mutationFn: () => putOnSaleData(id, product.post_status),
    onSuccess: () => updateOnSale(product?.post_status === 'onSale' ? 'soldOut' : 'onSale'),
  });
};
