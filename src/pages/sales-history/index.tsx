import { BoxItemTrade, Header, Tab, TextLabel } from '@components/index';
import React from 'react';
import arrow from '@assets/icons/arrow.svg';
import * as S from './style';
import { TabItemProps, SaleItem } from '../../types/types';

interface SalesInProgressProps {
  salesData: SaleItem[];
}

interface SalesCompletedProps {
  salesCompletedData: SaleItem[];
}

interface HiddenItemsProps {
  hiddenItemsData: SaleItem[];
}

const SalesHistory = () => {
  const salesData: SaleItem[] = [
    {
      id: 1,
      name: '지오다노',
      time: '30분전',
      state: '상품 상태 : 아주 좋아요',
      price: '16,500원',
      sold: '판매중',
    },
    {
      id: 2,
      name: '지오다노',
      time: '30분전',
      state: '상품 상태 : 아주 좋아요',
      price: '16,500원',
      sold: '판매중',
    },
    {
      id: 3,
      name: '지오다노',
      time: '30분전',
      state: '상품 상태 : 아주 좋아요',
      price: '16,500원',
      sold: '판매중',
    },
  ];

  const salesCompletedData: SaleItem[] = [
    {
      id: 1,
      name: 'H&M',
      time: '30분전',
      state: '상품 상태 : 아주 좋아요',
      price: '16,500원',
      sold: '판매완료',
    },
  ];

  const hiddenItemsData: SaleItem[] = [
    {
      id: 1,
      name: '지오다노',
      time: '30분전',
      state: '상품 상태 : 아주 좋아요',
      price: '16,500원',
      sold: '판매완료',
    },
  ];

  const SalesInProgress: React.FC<SalesInProgressProps> = ({ salesData }) => {
    return (
      <S.Container>
        {salesData.length > 0 ? (
          salesData.map((item: SaleItem) => <BoxItemTrade data={item} />)
        ) : (
          <div>판매중인 상품이 없습니다.</div>
        )}
      </S.Container>
    );
  };

  const SalesCompleted: React.FC<SalesCompletedProps> = ({ salesCompletedData }) => {
    return (
      <S.Container>
        {salesCompletedData.length > 0 ? (
          salesCompletedData.map((item: SaleItem) => <BoxItemTrade data={item} />)
        ) : (
          <div>판매완료된 상품이 없습니다.</div>
        )}
      </S.Container>
    );
  };

  const HiddenItems: React.FC<HiddenItemsProps> = ({ hiddenItemsData }) => {
    return (
      <S.Container>
        {hiddenItemsData.length > 0 ? (
          hiddenItemsData.map((item: SaleItem) => <BoxItemTrade data={item} />)
        ) : (
          <div>숨긴 상품이 없습니다.</div>
        )}
      </S.Container>
    );
  };

  const tabData: TabItemProps[] = [
    {
      label: '판매중',
      count: 4,
      ContentComponent: () => <SalesInProgress salesData={salesData} />,
    },
    {
      label: '판매 완료',
      count: 1,
      ContentComponent: () => <SalesCompleted salesCompletedData={salesCompletedData} />,
    },
    {
      label: '숨김',
      count: 2,
      ContentComponent: () => <HiddenItems hiddenItemsData={hiddenItemsData} />,
    },
  ];
  return (
    <>
      <Header>
        <TextLabel text="판매내역" size={16} weight={700} />
        <S.BackIcon className="left" src={arrow} alt="go back" />
      </Header>
      <S.MarginContainer />
      <Tab tabs={tabData} />
    </>
  );
};

export default SalesHistory;
