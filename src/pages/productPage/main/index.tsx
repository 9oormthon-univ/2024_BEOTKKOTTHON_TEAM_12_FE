import {
  ButtonPlus,
  FilterTrade,
  Header,
  ListTag,
  ListTradeItems,
  Nav,
  Search,
} from 'components/index';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import logo from 'assets/logo/logo.svg';
import notifications from 'assets/icons/notifications.svg';
import { useEffect } from 'react';
import { useSearchActions } from 'store/search';
import { instance } from 'apis';
import { useActiveCategory, useClickedOnSale, useProductListActions } from 'store/productListData';
import { productList } from 'data/shared';

const ProductMain = () => {
  const navigate = useNavigate();
  const clickedOnSale = useClickedOnSale();
  const { changeSearchData } = useSearchActions();
  const activeCategory = useActiveCategory();
  const { setActiveCategory } = useProductListActions();
  const { setInitialProductList } = useProductListActions();

  const getProductListData = async () => {
    try {
      await instance
        .get(
          `/products/category?categoryName=${activeCategory}&postStatus=${clickedOnSale}&pageNumber=0`
        )
        .then(function (response) {
          // 성공한 경우 실행
          console.log('물품 리스트 불러오기 성공', response);
          setInitialProductList(response.data.content);
        });
    } catch (e) {
      console.log('물품 리스트 불러오기 실패 ', e);
      setInitialProductList(productList);
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

      <Nav currentTab="거래하기" />
    </>
  );
};

export default ProductMain;
