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

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.Container>
        <section className="header">
          <Header>
            <img src={logo} alt="logo" />
            <img className="right" src={notifications} alt="notifications" />
          </Header>
        </section>

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

        <ButtonPlus />
      </S.Container>
      <Nav currentTab="홈" />
    </>
  );
};

export default MainPage;
