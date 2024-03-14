import { FilterTrade, HeaderLogo, ListTag, Search } from '@components/index';
import * as S from './style';

const MainPage = () => {
  return (
    <S.Container>
      <section className="header">
        <HeaderLogo />
      </section>

      <section className="search">
        <Search />
      </section>

      <section className="category">
        <ListTag />
      </section>

      <section className="items">
        <FilterTrade />
      </section>
    </S.Container>
  );
};

export default MainPage;
