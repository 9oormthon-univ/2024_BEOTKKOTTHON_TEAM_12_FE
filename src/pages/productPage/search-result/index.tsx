import { FilterTrade, ListTag, ListTradeItems, Loading, Search } from 'components/index';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { useSearch } from 'service/product/useProductService';
import { useSearchData } from 'store/search';
import { useActiveCategory, useClickedOnSale, useProductListActions } from 'store/productListData';

const SearchResult = () => {
  const navigate = useNavigate();
  const searchName = useSearchData();
  const onSale = useClickedOnSale();
  const activeCategory = useActiveCategory();
  const { setActiveCategory, addProductList } = useProductListActions();
  const {
    data: searchData,
    status,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearch(onSale, searchName, activeCategory);

  const { ref, inView } = useInView({ threshold: 0, delay: 0 });

  useEffect(() => {
    setActiveCategory('전체');
  }, []);

  useEffect(() => {
    if (searchData) addProductList(searchData.pagesData);
  }, [searchData]);

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
          <FilterTrade totalElements={searchData?.totalElements || 0} />
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
