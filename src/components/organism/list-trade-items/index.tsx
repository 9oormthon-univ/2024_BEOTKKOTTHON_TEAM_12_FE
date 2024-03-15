import { BoxItemTrade } from '@components/index';
import * as S from './style';
import { SaleItem } from 'src/types/types';
const ListTradeItems = () => {
  const salesData: SaleItem[] = [
    {
      id: 1,
      name: '지오다노',
      time: '30분전',
      state: '상품 상태 : 아주 좋아요',
      price: '16,500원',
      sold: '판매완료',
    },
    {
      id: 2,
      name: '지오다노',
      time: '30분전',
      state: '상품 상태 : 아주 좋아요',
      price: '16,500원',
      sold: '판매완료',
    },
    {
      id: 3,
      name: '지오다노',
      time: '30분전',
      state: '상품 상태 : 아주 좋아요',
      price: '16,500원',
      sold: '판매완료',
    },
  ];

  return (
    <S.Container>
      {salesData.map((saleData) => (
        <BoxItemTrade key={saleData.id} data={saleData} />
      ))}
    </S.Container>
  );
};

export default ListTradeItems;
