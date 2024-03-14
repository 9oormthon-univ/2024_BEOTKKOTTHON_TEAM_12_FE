import {
  ButtonPlus,
  FilterTrade,
  HeaderLogo,
  ListTag,
  ListTradeItems,
  Nav,
  Search,
} from '@components/index';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.Container>
        <section className="header">
          <HeaderLogo />
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
      <Nav />
    </>
  );
};

export default MainPage;
