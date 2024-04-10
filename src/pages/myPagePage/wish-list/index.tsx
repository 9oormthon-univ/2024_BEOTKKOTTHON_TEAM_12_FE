import { ButtonBack, Header, ListTradeItems, Loading, TextLabel } from 'components';
import * as S from './style';
import { useProductList } from 'store/productListData';
import { useWishListQuery } from 'hooks/queries/user/useWishListQuery';

const WishList = () => {
  const productList = useProductList();
  const wishListQuery = useWishListQuery();

  if (wishListQuery.isLoading) return <Loading />;

  return (
    <>
      <Header>
        <TextLabel size={16} $weight={700}>
          구매 내역
        </TextLabel>
        <ButtonBack className="left" $marginLeft="10px" />
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

export default WishList;
