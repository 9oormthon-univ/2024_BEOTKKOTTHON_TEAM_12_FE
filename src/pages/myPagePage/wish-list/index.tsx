import { ButtonBack, Header, ListTradeItems, Loading, TextLabel } from 'components';
import * as S from './style';
import { useProductList } from 'store/productListData';
import { useWishListQuery } from 'hooks/queries/user/useWishListQuery';

const WishList = () => {
  const { status } = useWishListQuery();
  const productList = useProductList();

  return (
    <>
      <Header>
        <TextLabel size={16} $weight={700}>
          관심 목록
        </TextLabel>
        <ButtonBack className="left" $marginLeft="10px" />
      </Header>

      <S.Content>
        <S.ProductHeader>
          <TextLabel size={12} $weight={100} color="var(--grey-6)">
            전체 {status === 'success' ? productList.length : 0}개
          </TextLabel>
        </S.ProductHeader>

        <ListTradeItems status={status} />
      </S.Content>
    </>
  );
};

export default WishList;
