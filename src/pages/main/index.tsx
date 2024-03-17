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
import { useProductsActions } from 'src/store/products';
import { salesData } from 'src/data/shared';
import axios from 'axios';

const Main = () => {
  const navigate = useNavigate();
  const { setInitalProducts } = useProductsActions();

  const getData = async () => {
    // const res = await axios.get(
    //   'http://43.201.189.171:8080/products?categoryName="전체"&postStatus=null&page=0'
    // );
    // console.log(res.data);
  };

  useEffect(() => {
    getData();
    setInitalProducts(salesData);
  }, [getData]);

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
