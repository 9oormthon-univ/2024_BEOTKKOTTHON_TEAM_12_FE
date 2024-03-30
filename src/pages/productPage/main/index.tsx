import {
  ButtonPlus,
  FilterTrade,
  Header,
  ListTag,
  ListTradeItems,
  Loading,
  Nav,
  Search,
} from 'components/index';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import logo from 'assets/logo/logo.svg';
import notifications from 'assets/icons/notifications.svg';
import { useEffect } from 'react';
import { useSearchActions } from 'store/search';
import { instance } from 'apis';
import { useActiveCategory, useClickedOnSale, useProductListActions } from 'store/productListData';
import { productList } from 'data/shared';
import { useQuery } from '@tanstack/react-query';

async function getProductListData(category: string, onSale: string | null) {
  try {
    const response = await instance.get(
      `/products/category?categoryName=${category}&postStatus=${onSale}&pageNumber=0`
    );
    console.log('물품 리스트 불러오기 성공', response);
    return response.data.content;
  } catch (e) {
    console.log('물품 리스트 불러오기 실패 ', e);
  }
}

const ProductMain = () => {
  const navigate = useNavigate();
  const clickedOnSale = useClickedOnSale();
  const { changeSearchData } = useSearchActions();
  const activeCategory = useActiveCategory();
  const { setActiveCategory } = useProductListActions();
  const { setInitialProductList } = useProductListActions();

  const { data, error, isLoading } = useQuery({
    queryKey: ['products', activeCategory, clickedOnSale],
    queryFn: () => getProductListData(activeCategory, clickedOnSale),
  });

  useEffect(() => {
    if (data) {
      setInitialProductList(data);
    }
  }, [data]);

  useEffect(() => {
    changeSearchData('');
    setActiveCategory('전체');
  }, []);

  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <img className="right" src={notifications} alt="notifications" />
      </Header>

      <S.Content>
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
          {error && <S.Error>상품을 불러오지 못했습니다.</S.Error>}
          {isLoading ? <Loading /> : <ListTradeItems />}
        </section>

        <Link to={'/product/new'}>
          <ButtonPlus $bottom="100px" />
        </Link>
      </S.Content>

      <Nav currentTab="거래하기" />
    </>
  );
};

export default ProductMain;
