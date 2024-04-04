import { BoxItemTrade, Header, TextLabel } from 'components/index';
import * as S from './style';
import React, { useEffect, useState } from 'react';
import arrow from 'assets/icons/arrow.svg';
import productImg1 from 'assets/images/product-image1.svg';
import { ProductListItem, ProductProp } from 'types/types';
import { useNavigate } from 'react-router';
import { instance } from 'apis';

const PurchaseHistory = () => {
  const navigate = useNavigate();
  const [purchaseData, setPurchaseData] = useState<ProductListItem[]>([
    {
      id: 5,
      price: 10000,
      product_name: '안입는 옷 처분해요',
      product_status: '아주 좋아요',
      post_status: 'soldOut',
      product_image: productImg1,
    },
    {
      id: 6,
      price: 10000,
      product_name: '안입는 옷 처분해요',
      product_status: '아주 좋아요',
      post_status: 'soldOut',
      product_image: productImg1,
    },
  ]);

  const userId = localStorage.getItem('userId');
  /*구매한 상품 불러오기 */
  const getPurchaseHistory = async () => {
    console.log('구매 내역 불러오기');

    try {
      const response = await instance.get(`/users/myHistory/${userId}`);
      console.log('구매 내역 불러오기 성공:', response.data);
      setPurchaseData(response.data);
    } catch (error) {
      console.error('구매 내역 불러오기 실패:', error);
    }
  };

  useEffect(() => {
    getPurchaseHistory();
  }, []);

  const SalesCompleted: React.FC<ProductProp> = ({ productData }) => {
    return (
      <S.Container>
        {productData.length > 0 ? (
          productData.map((item: ProductListItem) => <BoxItemTrade product={item} />)
        ) : (
          <S.NoItemContainer>내역이 없습니다.</S.NoItemContainer>
        )}
      </S.Container>
    );
  };
  return (
    <>
      <Header>
        <TextLabel text="구매 내역" size={16} $weight={700} />
        <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
      </Header>

      <S.Content>
        <S.ProductHeader>
          <TextLabel
            text={`전체 ${purchaseData.length}개`}
            size={12}
            $weight={100}
            color="var(--grey-6)"
          />
        </S.ProductHeader>
        <S.ProductWrapper>
          <SalesCompleted productData={purchaseData} />
        </S.ProductWrapper>
      </S.Content>
    </>
  );
};

export default PurchaseHistory;
