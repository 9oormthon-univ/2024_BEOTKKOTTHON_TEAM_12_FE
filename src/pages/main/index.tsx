import {
  ButtonPlus,
  FilterTrade,
  Header,
  ListTag,
  ListTradeItems,
  Nav,
  Search,
} from '@components/index';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import logo from '@assets/logo/logo.svg';
import notifications from '@assets/icons/notifications.svg';
import productImg1 from '@assets/images/product-image1.svg';
import productImg2 from '@assets/images/product-image2.svg';
import productImg3 from '@assets/images/product-image3.svg';
import productImg4 from '@assets/images/product-image4.svg';
import { useEffect } from 'react';
import { useActiveCategory, useClickedOnSale, useProductsActions } from 'src/store/products';
import { salesData } from 'src/data/shared';
// import axios from 'axios';
import { useSearchActions } from 'src/store/search';
import { instance } from 'src/apis';
import { useProductListData } from 'src/store/productListData';
import axios from 'axios';

const Main = () => {
  const navigate = useNavigate();
  const clickedOnSale = useClickedOnSale();
  const { changeSearchData } = useSearchActions();
  const { setInitalProducts, setActiveCategory } = useProductsActions();
  const activeCategory = useActiveCategory();
  const { actions } = useProductListData();

  const getProductListData = async () => {
    try {
      await instance
        .get(
          `/products/category?categoryName=${activeCategory}&postStatus=${clickedOnSale}&pageNumber=0`
        )
        .then(function (response) {
          // 성공한 경우 실행
          console.log('물품 리스트 불러오기 성공', response);
          actions.setInitialProductList(response.data.content);
        });
    } catch (e) {
      console.log('물품 리스트 불러오기 실패 ', e);
      actions.setInitialProductList([
        {
          id: 1,
          price: 10000,
          product_name: 'H&M 티셔츠 팔아요',
          product_status: '아주 좋아요',
          post_status: 'onSale',
          product_image: productImg1,
          is_selected: false,
        },
        {
          id: 2,
          price: 20000,
          product_name: '안입는 옷 처분',
          product_status: '아주 좋아요',
          post_status: 'soldOut',
          product_image: productImg2,
          is_selected: false,
        },
        {
          id: 3,
          price: 30000,
          product_name: 'ZARA 티셔츠',
          product_status: '아주 좋아요',
          post_status: 'onSale',
          product_image: productImg3,
          is_selected: false,
        },
        {
          id: 4,
          price: 15000,
          product_name: '지오다노 티',
          product_status: '보통이에요',
          post_status: 'onSale',
          product_image: productImg4,
          is_selected: false,
        },
        {
          id: 5,
          price: 5,
          product_name: 'RAV4',
          product_status: '아주 좋아요',
          post_status: 'onSale',
          product_image: productImg2,
          is_selected: false,
        },
        {
          id: 6,
          price: 6,
          product_name: 'Grand Am',
          product_status: '아주 좋아요',
          post_status: 'onSale',
          product_image: productImg1,
          is_selected: false,
        },
      ]);
    }
  };

  useEffect(() => {
    changeSearchData('');
    setActiveCategory('전체');
  }, []);

  useEffect(() => {
    getProductListData();
  }, [activeCategory, clickedOnSale]);

  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <img className="right" src={notifications} alt="notifications" />
      </Header>

      <S.Content>
        <section className="search" onClick={() => navigate('/search')}>
          <Search />
        </section>

        <section className="category">
          <ListTag />
        </section>

        <section className="filter">
          <FilterTrade />
        </section>

        <section className="items">
          <ListTradeItems />
        </section>

        <Link to={'/product/new'}>
          <ButtonPlus $bottom="100px" />
        </Link>
      </S.Content>

      <Nav currentTab="홈" />
    </>
  );
};

export default Main;
