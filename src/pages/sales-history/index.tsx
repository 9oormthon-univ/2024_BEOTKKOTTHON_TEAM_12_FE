import { BoxItemTrade, Button, ButtonPlus, Header, Tab, TextLabel } from '@components/index';
import React from 'react';
import arrow from '@assets/icons/arrow.svg';
import * as S from './style';
import {
  TabItemProps,
  SalesInProgressProps,
  SalesCompletedProps,
  HiddenItemsProps,
  Product,
} from '../../types/types';
import { useNavigate } from 'react-router';
import { useAllProducts } from 'src/store/products';

const SalesHistory = () => {
  const navigate = useNavigate();
  const products = useAllProducts();
  const salesData = products.filter((product) => product.sold === '판매중');
  const salesCompletedData = products.filter((product) => product.sold === '판매완료');

  const handleClick = () => {
    navigate('/product/new');
  };

  // const salesData: SaleItem[] = [
  //   {
  //     id: 1,
  //     name: '지오다노',
  //     time: '30분전',
  //     state: '상품 상태 : 아주 좋아요',
  //     price: '16,500원',
  //     sold: '판매중',
  //   },
  //   {
  //     id: 2,
  //     name: '지오다노',
  //     time: '30분전',
  //     state: '상품 상태 : 아주 좋아요',
  //     price: '16,500원',
  //     sold: '판매중',
  //   },
  //   {
  //     id: 3,
  //     name: '지오다노',
  //     time: '30분전',
  //     state: '상품 상태 : 아주 좋아요',
  //     price: '16,500원',
  //     sold: '판매중',
  //   },
  // ];

  // const salesCompletedData: SaleItem[] = [
  //   {
  //     id: 1,
  //     name: 'H&M',
  //     time: '30분전',
  //     state: '상품 상태 : 아주 좋아요',
  //     price: '16,500원',
  //     sold: '판매완료',
  //   },
  // ];

  const hiddenItemsData: Product[] = [
    {
      id: '1',
      name: '지오다노',
      time: '30분전',
      state: '보통이에요',
      price: 16500,
      recievedImgUrl: [
        '/src/assets/nav-icons/chatting_green.svg',
        '/src/assets/nav-icons/chatting_grey.svg',
        '/src/assets/images/product-default-img.png',
      ],
      description:
        '아아아ㅏㅏ아ㅏ이으으아아으잉이으으으아아아앙아아ㅏㅏ아ㅏㅇ아ㅏ아아아ㅏ아아ㅡ으으응ㅇ아아아ㅏ아아아ㅏㅏ아ㅏ이으으아아으잉이으으으아아아앙아아ㅏㅏ아ㅏㅇ아ㅏ아아아ㅏ아아ㅡ으으응ㅇ아아아ㅏ',
      place: '정문',
      sold: '판매중',
    },
  ];

  //판매완료 버튼 클릭
  const handleSaleComplete = (id: number) => {
    console.log(`판매완료 버튼 클릭 id: ${id}`);
  };

  const SalesInProgress: React.FC<SalesInProgressProps> = ({ salesData }) => {
    return (
      <S.Container>
        {salesData.length > 0 ? (
          salesData.map((item: Product) => (
            <S.SaleWrapper>
              <BoxItemTrade product={item} width={'100%'} />
              <Button
                text="판매 완료하기"
                width="100%"
                handleOnClick={() => handleSaleComplete(Number(item.id))}
              />
            </S.SaleWrapper>
          ))
        ) : (
          <S.NoItemContainer>내역이 없습니다.</S.NoItemContainer>
        )}
      </S.Container>
    );
  };

  const SalesCompleted: React.FC<SalesCompletedProps> = ({ salesCompletedData }) => {
    return (
      <S.Container>
        {salesCompletedData.length > 0 ? (
          salesCompletedData.map((item: Product) => <BoxItemTrade product={item} />)
        ) : (
          <S.NoItemContainer>내역이 없습니다.</S.NoItemContainer>
        )}
      </S.Container>
    );
  };

  const HiddenItems: React.FC<HiddenItemsProps> = ({ hiddenItemsData }) => {
    return (
      <S.Container>
        {hiddenItemsData.length > 0 ? (
          hiddenItemsData.map((item: Product) => <BoxItemTrade product={item} />)
        ) : (
          <S.NoItemContainer>내역이 없습니다.</S.NoItemContainer>
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
        <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
      </Header>
      <S.MarginContainer />
      <Tab tabs={tabData} />
      <ButtonPlus handleClick={handleClick} />
    </>
  );
};

export default SalesHistory;
