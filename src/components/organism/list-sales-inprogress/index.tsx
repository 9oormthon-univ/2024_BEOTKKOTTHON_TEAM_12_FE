import React, { useState } from 'react';
import * as S from './style';
import ModalProduct from 'components/molcule/modal-product';
import BoxItemTrade from 'components/molcule/box-item-trade';
import Button from 'components/atom/button';
import BoxNoItem from 'components/atom/box-noitem';
import { useSalesProductQuery } from 'hooks/queries/user/useSalesProductQuery';
import { useProductList } from 'store/productListData';
import { usePostSalesCompletedMutation } from 'hooks/queries/user/usePostSalesCompletedMutation';
import { Loading } from 'components';
import { ProductListItem } from 'types/productType';

const ListSalesInprogress: React.FC = () => {
  const salesProductQuery = useSalesProductQuery();
  const productList = useProductList();
  const { mutate: postSalesCompletedMutation } = usePostSalesCompletedMutation();

  const [openModal, setOpenModal] = useState<boolean>(false);
  console.log('ListSalesInprogress productList', productList);

  if (salesProductQuery.isLoading) return <Loading />;

  return (
    <S.Container>
      {productList.length > 0 ? (
        productList.map((item: ProductListItem) => (
          <S.SaleWrapper key={item.id}>
            {openModal && (
              <ModalProduct
                id={item.id.toString()}
                select1="취소"
                select2="변경"
                openModal={openModal}
                setOpenModal={setOpenModal}
                onClick={() => postSalesCompletedMutation(item.id)}
              >
                <p>판매완료로 변경할까요?</p>
              </ModalProduct>
            )}
            <BoxItemTrade product={item} $marginBottom="12px" />
            <Button
              width="100%"
              $padding="8px 10px"
              $bgcolor="var(--grey-4)"
              fontSize="11px"
              color="var(--grey-2)"
              handleOnClick={() => setOpenModal(!openModal)}
            >
              판매 완료하기
            </Button>
          </S.SaleWrapper>
        ))
      ) : (
        <BoxNoItem />
      )}
    </S.Container>
  );
};

export default ListSalesInprogress;
