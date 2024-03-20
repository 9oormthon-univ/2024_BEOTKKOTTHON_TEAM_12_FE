import {
  BoxItemTrade,
  Button,
  ButtonPlus,
  Header,
  ModalProduct,
  Tab,
  TextLabel,
} from '@components/index';
import React, { useEffect, useState } from 'react';
import arrow from '@assets/icons/arrow.svg';
import * as S from './style';
import { TabItemProps, ProductListItem, ProductProp } from '../../types/types';
import { useNavigate } from 'react-router';
import productImg1 from '@assets/images/product-image1.svg';
import productImg2 from '@assets/images/product-image2.svg';
import productImg3 from '@assets/images/product-image3.svg';
import { Link } from 'react-router-dom';
import { instance } from '../../apis/index';

const SalesHistory = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [salesData, setSalesData] = useState<ProductListItem[]>([
    {
      id: 2,
      price: 10000,
      product_name: '안입는 옷 처분해요',
      product_status: '아주 좋아요',
      post_status: 'onSale',
      product_image: productImg1,
    },
  ]);
  const [salesCompletedData, setSalesCompletedData] = useState<ProductListItem[]>([
    {
      id: 4,
      price: 10000,
      product_name: 'H&M 티셔츠팔아요',
      product_status: '아주 좋아요',
      post_status: 'soldOut',
      product_image: productImg2,
    },
  ]);

  const [hiddenItemsData, setHiddenItemsData] = useState<ProductListItem[]>([
    {
      id: 3,
      price: 10000,
      product_name: 'ZARA 티셔츠 팔아요',
      product_status: '아주 좋아요',
      post_status: 'hidden',
      product_image: productImg3,
    },
  ]);

  // const salesCompletedData = products.filter((product) => product.post_status === '판매완료');
  const userId = '1';

  /*판매중인 상품 불러오기 */
  const getSalesProducts = async () => {
    try {
      const response = await instance.get(`/users/myProducts/onSale/${userId}`);
      console.log('판매중인 상품 불러오기 성공:', response.data);
      setSalesData(response.data);
    } catch (error) {
      console.log('판매중 데이터 불러오기 실패', error);
    }
  };

  /**판매완료 된 상품 불러오기 */
  const getSalesCompletedProducts = async () => {
    try {
      const response = await instance.get(`/users/myProducts/soldOut/${userId}`);
      console.log('판매완료 상품 불러오기 성공:', response.data);
      setSalesCompletedData(response.data);
      //setSalesCompletedData(response.data);
    } catch (error) {
      console.log('판매완료 데이터 불러오기 실패', error);
    }
  };

  /*숨김 상품 불러오기 */
  const getHiddenItems = async () => {
    try {
      const response = await instance.get(`/users/myProducts/private/${userId}`);
      console.log('숨김 상품 불러오기 성공:', response.data);
      setHiddenItemsData(response.data);
    } catch (error) {
      console.log('숨김 상품 불러오기 실패', error);
    }
  };

  /**상품 상태를 판매완료로 변경하는 메ㅑ호출 */
  const postSalesCompleted = async (productId: number) => {
    const productStatus = {
      id: productId,
      post_status: 'soldOut',
    };
    console.log('판매완료로 변경할 상품 id:', productStatus);
    try {
      const response = await instance.post(`/users/myProducts/onSale/${userId}`, { productStatus });
      console.log('상품 상태 변경 성공:', response.data);
      getSalesProducts();
      getSalesCompletedProducts();
    } catch (error) {
      console.log('상품 상태 변경 실패', error);
    }
  };

  useEffect(() => {
    getSalesProducts();
    getSalesCompletedProducts();
    getHiddenItems();
  }, []);

  //판매완료 버튼 클릭
  const handleSaleComplete = (id: number) => {
    console.log(`판매완료 버튼 클릭 id: ${id}`);
    setOpenModal(!openModal);
  };

  const SalesInProgress: React.FC<ProductProp> = ({ productData }) => {
    return (
      <S.Container>
        {productData.length > 0 ? (
          productData.map((item: ProductListItem) => (
            <S.SaleWrapper>
              {openModal && (
                <ModalProduct
                  id={item.id.toString()}
                  select1="취소"
                  select2="변경"
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  onClick={postSalesCompleted}
                >
                  <p>판매완료로 변경할까요?</p>
                </ModalProduct>
              )}
              <BoxItemTrade product={item} width={'160px'} />
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

  const SalesCompleted: React.FC<ProductProp> = ({ productData }) => {
    return (
      <S.Container>
        {productData.length > 0 ? (
          productData.map((item: ProductListItem) => (
            <BoxItemTrade product={item} width={'160px'} />
          ))
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
      ContentComponent: () => <SalesInProgress productData={salesData} />,
    },
    {
      label: '판매 완료',
      count: 1,
      ContentComponent: () => <SalesCompleted productData={salesCompletedData} />,
    },
    {
      label: '숨김',
      count: 2,
      ContentComponent: () => <SalesCompleted productData={hiddenItemsData} />,
    },
  ];
  return (
    <>
      <Header>
        <TextLabel text="판매내역" size={16} $weight={700} />
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
