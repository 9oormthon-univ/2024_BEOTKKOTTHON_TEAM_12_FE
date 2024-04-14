import * as S from './style';
import search from 'assets/icons/search.svg';
import { useNavigate } from 'react-router-dom';
import cancle from 'assets/icons/cancel.svg';
import { useSearchActions, useSearchData } from 'store/search';

interface SearchProps {
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  const navigate = useNavigate();
  const searchData = useSearchData();
  const { changeSearchData } = useSearchActions();

  const handleClickSearch = () => {
    navigate('/search/result');
  };

  return (
    <S.Container>
      <div className="btn-search" onClick={handleClickSearch}>
        <img src={search} alt="search" />
      </div>

      <input
        type="search"
        name="search"
        enterKeyHint="search"
        value={searchData}
        onChange={(e) => changeSearchData(e.target.value)}
        placeholder={placeholder ? placeholder : '무엇이든 검색해보세요.'}
        onKeyDown={(e) => e.key === 'Enter' && handleClickSearch}
      />

      {searchData && <img src={cancle} alt="btn-cancle" onClick={() => changeSearchData('')} />}
    </S.Container>
  );
};

export default Search;
