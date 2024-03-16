import { FilterTrade, ListTag, ListTradeItems, Search } from '@components/index';
import * as S from './style';
import back from '@assets/icons/left_btn.svg';
import { useNavigate } from 'react-router-dom';

const SearchResult = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.HeaderSearch>
        <img src={back} onClick={() => navigate('/')} width={'30px'} alt="btn-back" />
        <div onClick={() => navigate('/search')}>
          <Search />
        </div>
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
