import { FilterTrade, ListTag, ListTradeItems, Search } from 'components/index';
import * as S from './style';
import back from 'assets/icons/left_btn.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSearchData } from 'store/search';
import { useActiveCategory, useClickedOnSale, useProductListActions } from 'store/productListData';
import { instance } from 'apis';
// import { instance } from 'src/apis';

const SearchResult = () => {
  const clickedOnSale = useClickedOnSale();
  const activeCategory = useActiveCategory();
  const searchData = useSearchData();
  const { setActiveCategory } = useProductListActions();

  // const getData = async () => {
  //   await instance.get()
  // };

  useEffect(() => {
    setActiveCategory('전체');
  }, []);

  const getSearchData = async () => {
    await instance
      .get(
        `/products/search/category/sale?searchName=%EC%9E%90%EB%9D%BC?categoryName=%EC%A0%84%EC%B2%B4&postStatus=&pageNumber=0`
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    // const url = `/products?categoryName=${activeCategory}&postStatus=${clickedOnSale}&page=0/${searchData}`;
    // console.log(url);
    // const res = axios.get(url);
    getSearchData();
  }, [activeCategory, clickedOnSale, searchData]);

  return (
    <>
      <S.HeaderSearch>
        <Link to={'/product'}>
          <img src={back} width={'30px'} alt="btn-back" />
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
          <ListTradeItems />
        </section>
      </S.Content>
    </>
  );
};

export default SearchResult;
