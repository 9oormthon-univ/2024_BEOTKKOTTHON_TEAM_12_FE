import { BoxItemTrade, Header, TextLabel } from '@components/index';
import * as S from './style';
import React from 'react';
import arrow from '@assets/icons/arrow.svg';
import { Product, SalesCompletedProps } from 'src/types/types';
import { useNavigate } from 'react-router';
import { useProducts } from 'src/store/products';

const PurchaseHistory = () => {
  const navigate = useNavigate();
  const products = useProducts();
  const salesCompletedData: Product[] = products.filter((product) => product.sold === '판매완료');

  const SalesCompleted: React.FC<SalesCompletedProps> = ({ salesCompletedData }) => {
    return (
      <S.Container>
        {salesCompletedData.length > 0 ? (
          salesCompletedData.map((item: Product) => <BoxItemTrade product={item} />)
        ) : (
          <div>구매한 상품이 없습니다.</div>
        )}
      </S.Container>
    );
  };
  return (
    <>
      <Header>
        <TextLabel text="구매 내역" size={16} weight={700} />
        <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
      </Header>
      <S.ProductHeader>
        <TextLabel
          text={`전체 ${salesCompletedData.length}개`}
          size={12}
          weight={100}
          color="var(--grey-6)"
        />
      </S.ProductHeader>
      <S.ProductWrapper>
        <SalesCompleted salesCompletedData={salesCompletedData} />
      </S.ProductWrapper>
    </>
  );
};

export default PurchaseHistory;
