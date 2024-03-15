import { useState } from 'react';
import * as S from './style';
import search from '@assets/icons/search.svg';
import { useNavigate } from 'react-router-dom';
import cancle from '@assets/icons/cancel.svg';

interface SearchProps {
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  const navigate = useNavigate();
  const [searchInput, SetSearchInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    SetSearchInput(value);
  };

  const handleClickSearch = () => {
    // 값 전달
    navigate('/search/result');
  };

  const handleClickCancle = () => {
    SetSearchInput('');
  };

  return (
    <S.Container>
      <div className="btn-search" onClick={handleClickSearch}>
        <img src={search} alt="search" />
      </div>

      <input
        value={searchInput}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : '무엇이든 검색해보세요.'}
      />

      {searchInput && <img src={cancle} alt="btn-cancle" onClick={handleClickCancle} />}
    </S.Container>
  );
};

export default Search;
