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
// import defaultImg from '@assets/images/profile-default-image.svg';
import { Link } from 'react-router-dom';

const SalesHistory = () => {
  const navigate = useNavigate();
  const products = useAllProducts();
  const salesData = products.filter((product) => product.post_status === '판매중');
  const salesCompletedData = products.filter((product) => product.post_status === '판매완료');

  const hiddenItemsData: Product[] = [
    {
      id: 8,
      product_name: 'Catnip',
      price: 8,
      product_image: [
        'http://dummyimage.com/201x100.png/5fa2dd/ffffff',
        'http://dummyimage.com/201x100.png/5fa2dd/ffffff',
        'http://dummyimage.com/201x100.png/5fa2dd/ffffff',
        'http://dummyimage.com/201x100.png/5fa2dd/ffffff',
        'http://dummyimage.com/201x100.png/5fa2dd/ffffff',
      ],
      product_content:
        'suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque',
      product_status: '아주 좋아요',
      post_status: '판매중',
      place: 'ultrices posuere cubilia curae nulla dapibus dolor vel est donec',
      is_private: true,
      category_id: 'nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus',
      wish: '193.148.54.13',
      count: '144.16.105.89',
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
                children="판매 완료하기"
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

      <S.Content>
        <Tab tabs={tabData} />
        <Link to={'/product/new'}>
          <ButtonPlus $bottom="20px" />
        </Link>
      </S.Content>
    </>
  );
};

export default SalesHistory;
