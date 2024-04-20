import { FilterTrade, ListTag, ListTradeItems, Loading, Search } from 'components/index';
import * as S from './style';
import back from 'assets/icons/arrow_left_alt.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSearchQuery } from 'hooks/queries/products/useSearchQuery';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const SearchResult = () => {
  const navigate = useNavigate();
  const { data: searchQuery, status, fetchNextPage, isFetchingNextPage } = useSearchQuery();
  const { ref, inView } = useInView({ threshold: 0, delay: 0 });

  useEffect(() => {
    if (inView && fetchNextPage) fetchNextPage();
  }, [inView]);

  return (
    <>
      <S.HeaderSearch>
        <img src={back} alt="back" onClick={() => navigate(-1)} />
        <Link to={'/search'} className="search-input">
          <Search />
        </Link>
      </S.HeaderSearch>

      <S.Content>
        <section className="category">
          <ListTag />
        </section>

        <section className="filter">
          <FilterTrade totalElements={searchQuery?.totalElements || 0} />
          {isFetchingNextPage ? (
            <Loading $width="100%" $height="50px" />
          ) : (
            <div ref={ref} style={{ height: '50px' }} />
          )}
        </section>

        <section className="items">
          <ListTradeItems status={status} />
        </section>
      </S.Content>
    </>
  );
};

export default SearchResult;
