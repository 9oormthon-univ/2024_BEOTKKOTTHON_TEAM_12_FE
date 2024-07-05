import * as S from './style';
import ModalProduct from 'components/molcule/modal-product';
import Button from 'components/atom/button';
import { useProductList } from 'store/productListData';
import { ProductItem } from 'types/productType';
import { BoxError, BoxItemTrade } from 'components';
import { useToggle } from 'hooks/useToggle';
import { useChangeSalesToCompleted } from 'service/user/useUserService';

const ListSalesInprogress: React.FC = () => {
  const productList = useProductList();
  const { mutate: postSalesCompletedMutation } = useChangeSalesToCompleted();
  const [isOpenModal, togleOpenModal] = useToggle(false);

  if (productList.length === 0)
    return <BoxError $height="300px">상품이 존재하지 않습니다.</BoxError>;

  return (
    <S.Container>
      {productList.map((item: ProductItem) => (
        <S.SaleWrapper key={item.id}>
          {isOpenModal && (
            <ModalProduct
              id={item.id.toString()}
              select1="취소"
              select2="변경"
              isOpenModal={isOpenModal}
              togleOpenModal={togleOpenModal}
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
            handleOnClick={togleOpenModal}
          >
            판매 완료하기
          </Button>
        </S.SaleWrapper>
      ))}
    </S.Container>
  );
};

export default ListSalesInprogress;
