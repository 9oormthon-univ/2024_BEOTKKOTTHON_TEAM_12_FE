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
import { useEffect } from 'react';
import { useSearchActions } from 'store/search';
import { useActiveCategory, useClickedOnSale, useProductListActions } from 'store/productListData';
import { useInView } from 'react-intersection-observer';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { useProductMain } from 'service/product/useProductService';

const ProductMain = () => {
  const navigate = useNavigate();
  const clickedOnSale = useClickedOnSale();
  const activeCategory = useActiveCategory();
  const { addProductList, setActiveCategory } = useProductListActions();
  const { changeSearchData } = useSearchActions();
  const { ref, inView } = useInView({ threshold: 0, delay: 0 });
  const {
    data: mainData,
    status,
    fetchNextPage,
    isFetchingNextPage,
  } = useProductMain(activeCategory, clickedOnSale);

  useEffect(() => {
    if (mainData) addProductList(mainData.pagesData);
  }, [mainData]);

  useEffect(() => {
    if (inView && fetchNextPage) fetchNextPage();
  }, [inView]);

  useEffect(() => {
    changeSearchData('');
    setActiveCategory('전체');
  }, []);

  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <IoIosNotificationsOutline className="right" />
      </Header>

      <S.Content>
        <section className="search" onClick={() => navigate('/search')}>
          <Search />
        </section>

        <section className="category">
          <ListTag />
        </section>

        <section className="filter">
          <FilterTrade totalElements={mainData?.totalElements || 0} />
        </section>

        <section className="items">
          <ListTradeItems status={status} />
          {isFetchingNextPage ? (
            <Loading $width="100%" $height="50px" />
          ) : (
            <div ref={ref} style={{ height: '50px' }} />
          )}
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
