import { FilterTrade, ListTag, ListTradeItems, Search } from '@components/index';
import * as S from './style';
import back from '@assets/icons/left_btn.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSearchData } from 'src/store/search';
import {
  useActiveCategory,
  useClickedOnSale,
  useProductListActions,
} from 'src/store/productListData';
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

  useEffect(() => {
    const url = `${import.meta.env.VITE_SERVER_URL}/products?categoryName=${activeCategory}&postStatus=${clickedOnSale}&page=0/${searchData}`;
    console.log(url);
    // const res = axios.get(url);
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
