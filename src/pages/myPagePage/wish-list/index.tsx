import { ButtonBack, Header, ListTradeItems, Loading, TextLabel } from 'components';
import * as S from './style';
import { useProductList } from 'store/productListData';
import { useWishListQuery } from 'hooks/queries/user/useWishListQuery';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const WishList = () => {
  const { status, fetchNextPage, isFetchingNextPage } = useWishListQuery();
  const productList = useProductList();
  const { ref, inView } = useInView({ threshold: 0, delay: 0 });

  useEffect(() => {
    if (inView && fetchNextPage) fetchNextPage();
  }, [inView]);

  return (
    <>
      <Header>
        <TextLabel size={16} $weight={700}>
          관심 목록
        </TextLabel>
        <ButtonBack className="left" />
      </Header>

      <S.Content>
        <S.ProductHeader>
          <TextLabel size={12} $weight={100} color="var(--grey-6)">
            전체 {status === 'success' ? productList.length : 0}개
          </TextLabel>
        </S.ProductHeader>

        <ListTradeItems status={status} />
        {isFetchingNextPage ? (
          <Loading $width="100%" $height="50px" />
        ) : (
          <div ref={ref} style={{ height: '50px' }} />
        )}
      </S.Content>
    </>
  );
};

export default WishList;
