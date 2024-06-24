import { FilterTrade, ListTag, ListTradeItems, Loading, Search } from 'components/index';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import { useSearchQuery } from 'queries/products/useSearchQuery';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { IoMdArrowBack } from 'react-icons/io';

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
        <IoMdArrowBack size={25} color="var(--grey-7)" onClick={() => navigate(-1)} />
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
        </section>

        <section className="items">
          <ListTradeItems status={status} />
          {isFetchingNextPage ? (
            <Loading $width="100%" $height="50px" />
          ) : (
            <div ref={ref} style={{ height: '50px' }} />
          )}
        </section>
      </S.Content>
    </>
  );
};

export default SearchResult;
