import { BoxItemTrade, Header, TextLabel } from '@components/index';
import * as S from './style';
import React from 'react';
import arrow from '@assets/icons/arrow.svg';
import { SaleItem, SalesCompletedProps } from 'src/types/types';
import { useNavigate } from 'react-router';

const PurchaseHistory = () => {
  const navigate = useNavigate();
  const salesCompletedData: SaleItem[] = [
    {
      id: 1,
      name: 'H&M',
      time: '30분전',
      state: '상품 상태 : 아주 좋아요',
      price: '16,500원',
      sold: '판매완료',
    },
    {
      id: 2,
      name: 'H&M',
      time: '30분전',
      state: '상품 상태 : 아주 좋아요',
      price: '16,500원',
      sold: '판매완료',
    },
    {
      id: 3,
      name: 'H&M',
      time: '30분전',
      state: '상품 상태 : 아주 좋아요',
      price: '16,500원',
      sold: '판매완료',
    },
  ];

  const SalesCompleted: React.FC<SalesCompletedProps> = ({ salesCompletedData }) => {
    return (
      <S.Container>
        {salesCompletedData.length > 0 ? (
          salesCompletedData.map((item: SaleItem) => <BoxItemTrade data={item} />)
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
