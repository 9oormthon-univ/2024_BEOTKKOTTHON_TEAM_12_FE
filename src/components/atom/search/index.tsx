import * as S from './style';
import { Link } from 'react-router-dom';
import { useSearchActions, useSearchData } from 'store/search';
import { IoIosCloseCircle, IoMdSearch } from 'react-icons/io';
import { useSearchSave } from 'service/product/useProductService';

interface SearchProps {
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  const searchData = useSearchData();
  const { changeSearchData } = useSearchActions();
  const { mutate: searchSaveMutation } = useSearchSave();

  const handleClick = () => {
    changeSearchData('');
    searchSaveMutation(searchData);
  };

  return (
    <S.Container>
      <div className="btn-search" onClick={() => searchSaveMutation(searchData)}>
        <Link to={'/search/result'}>
          <IoMdSearch size={24} color="var(--grey-6)" />
        </Link>
      </div>

      <input
        type="search"
        name="search"
        enterKeyHint="search"
        value={searchData}
        onChange={(e) => changeSearchData(e.target.value)}
        placeholder={placeholder ? placeholder : '무엇이든 검색해보세요.'}
      />

      {searchData && (
        <IoIosCloseCircle size={22} color="var(--grey-3)" onClick={() => changeSearchData('')} />
      )}
    </S.Container>
  );
};

export default Search;
