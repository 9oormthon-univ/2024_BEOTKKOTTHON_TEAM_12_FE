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
import { useProductListActions } from 'store/productListData';
import { useProductMainQuery } from 'hooks/queries/products/useProductMainQuery';
import { useInView } from 'react-intersection-observer';

const ProductMain = () => {
  const navigate = useNavigate();
  const { status, fetchNextPage, isFetchingNextPage } = useProductMainQuery();
  const { changeSearchData } = useSearchActions();
  const { setActiveCategory } = useProductListActions();
  const { ref, inView } = useInView({ threshold: 0, delay: 0 });

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
