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
import { useNavigate } from 'react-router-dom';
import logo from '@assets/logo/logo.svg';
import notifications from '@assets/icons/notifications.svg';
import { useEffect } from 'react';
import { useProductsActions } from 'src/store/products';
import { salesData } from 'src/data/shared';

const Main = () => {
  const navigate = useNavigate();
  const { setInitalProducts } = useProductsActions();

  const handleClickBtn = () => {
    navigate('/product/new');
  };

  useEffect(() => {
    setInitalProducts(salesData);
  }, []);

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

        <ButtonPlus $bottom="100px" handleClick={handleClickBtn} />
      </S.Content>

      <Nav currentTab="홈" />
    </>
  );
};

export default Main;