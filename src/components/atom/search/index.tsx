import * as S from './style';
import search from '@assets/icons/search.svg';
import { useNavigate } from 'react-router-dom';
import cancle from '@assets/icons/cancel.svg';
import { useSearchActions, useSearchData } from 'src/store/search';

interface SearchProps {
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  const navigate = useNavigate();
  const searchData = useSearchData();
  const { changeSearchData } = useSearchActions();

  // const [searchInput, SetSearchInput] = useState<string>('');

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   SetSearchInput(value);
  // };

  const handleClickSearch = () => {
    // 값 전달
    navigate('/search/result');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClickSearch();
    }
  };

  return (
    <S.Container>
      <div className="btn-search" onClick={handleClickSearch}>
        <img src={search} alt="search" />
      </div>

      <input
        type="search"
        value={searchData}
        onChange={(e) => changeSearchData(e.target.value)}
        placeholder={placeholder ? placeholder : '무엇이든 검색해보세요.'}
        onKeyDown={handleKeyDown}
      />

      {searchData && <img src={cancle} alt="btn-cancle" onClick={() => changeSearchData('')} />}
    </S.Container>
  );
};

export default Search;
