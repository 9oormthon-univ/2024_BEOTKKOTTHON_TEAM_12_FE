import { ButtonBack, Header, ListTradeItems, Loading, TextLabel } from 'components/index';
import * as S from './style';
import { useProductList, useProductListActions } from 'store/productListData';
import { usePurchaseHistory } from 'service/user/useUserService';
import { useEffect } from 'react';

const PurchaseHistory = () => {
  const productList = useProductList();
  const { data: purchaseHistory, status } = usePurchaseHistory();
  const { addProductList } = useProductListActions();

  useEffect(() => {
    if (purchaseHistory) addProductList(purchaseHistory);
  }, [purchaseHistory]);

  if (status === 'pending') return <Loading />;

  return (
    <>
      <Header>
        <TextLabel size={16} $weight={700}>
          구매 내역
        </TextLabel>
        <ButtonBack className="left" />
      </Header>

      <S.Content>
        <S.ProductHeader>
          <TextLabel size={12} $weight={100} color="var(--grey-6)">
            전체 {productList.length}개
          </TextLabel>
        </S.ProductHeader>

        <ListTradeItems />
      </S.Content>
    </>
  );
};

export default PurchaseHistory;
