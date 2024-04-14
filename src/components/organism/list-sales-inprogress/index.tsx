import React, { useState } from 'react';
import * as S from './style';
import ModalProduct from 'components/molcule/modal-product';
import BoxItemTrade from 'components/molcule/box-item-trade';
import Button from 'components/atom/button';
import { useProductList } from 'store/productListData';
import { usePostSalesCompletedMutation } from 'hooks/queries/user/usePostSalesCompletedMutation';
import { ProductListItem } from 'types/productType';
import { BoxError } from 'components';

const ListSalesInprogress: React.FC = () => {
  const productList = useProductList();
  const { mutate: postSalesCompletedMutation } = usePostSalesCompletedMutation();
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      {productList.length > 0 ? (
        <S.Container>
          {productList.map((item: ProductListItem) => (
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
                $fontWeight="bold"
                handleOnClick={() => setOpenModal(!openModal)}
              >
                판매 완료하기
              </Button>
            </S.SaleWrapper>
          ))}
        </S.Container>
      ) : (
        <BoxError>상품 목록이 없습니다.</BoxError>
      )}
    </>
  );
};

export default ListSalesInprogress;
