import { FilterTrade, ListTag, ListTradeItems, Search } from '@components/index';
import * as S from './style';
import back from '@assets/icons/left_btn.svg';

const SearchResultPage = () => {
  return (
    <S.Container>
      <section className="header">
        <S.HeaderSearch>
          <img src={back} width={'30px'} alt="btn-back" />
          <Search />
        </S.HeaderSearch>
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
    </S.Container>
  );
};

export default SearchResultPage;
