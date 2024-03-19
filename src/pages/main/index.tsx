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
import { useEffect } from 'react';
import { useActiveCategory, useClickedOnSale, useProductsActions } from 'src/store/products';
import { salesData } from 'src/data/shared';
import axios from 'axios';
import { useSearchActions } from 'src/store/search';

const Main = () => {
  const navigate = useNavigate();
  const clickedOnSale = useClickedOnSale();
  const { changeSearchData } = useSearchActions();
  const { setInitalProducts, setActiveCategory } = useProductsActions();
  const activeCategory = useActiveCategory();

  const getData = async () => {
    // const url = `${import.meta.env.VITE_SERVER_URL}/products?categoryName=${activeCategory}&postStatus=${clickedOnSale}&page=0`;
    const url = `${import.meta.env.VITE_SERVER_URL}/products?categoryName=${activeCategory}?&pageNumber=0`;
    console.log(url);
    // const res = await axios.get(url);
    // console.log(res.data);
  };

  useEffect(() => {
    changeSearchData('');
    setActiveCategory('전체');
  }, []);

  useEffect(() => {
    getData();
    setInitalProducts(salesData);
  }, [getData, activeCategory, clickedOnSale]);

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
