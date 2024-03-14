import { useState } from 'react';
import * as S from './style';
import search from '@assets/icons/search.svg';

const Search = () => {
  const [searchInput, SetSearchInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    SetSearchInput(value);
  };

  return (
    <S.Container>
      <div>
        <img src={search} alt="search" />
      </div>
      <input value={searchInput} onChange={handleChange} placeholder="무엇이든 검색해보세요." />
    </S.Container>
  );
};

export default Search;
