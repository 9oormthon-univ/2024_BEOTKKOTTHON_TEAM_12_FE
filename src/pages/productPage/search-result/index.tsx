import { FilterTrade, ListTag, ListTradeItems, Loading, Search } from 'components/index';
import * as S from './style';
import back from 'assets/icons/arrow_left_alt.svg';
import { Link } from 'react-router-dom';
import { useSearchQuery } from 'hooks/queries/products/useSearchQuery';

const SearchResult = () => {
  const searchQuery = useSearchQuery();

  return (
    <>
      <S.HeaderSearch>
        <Link to={'/product'}>
          <img src={back} alt="back" />
        </Link>
        <Link to={'/search'} className="search-input">
          <Search />
        </Link>
      </S.HeaderSearch>

      <S.Content>
        <section className="category">
          <ListTag />
        </section>

        <section className="filter">
          <FilterTrade />
        </section>

        <section className="items">
          {searchQuery.isLoading ? <Loading /> : <ListTradeItems />}
        </section>
      </S.Content>
    </>
  );
};

export default SearchResult;
