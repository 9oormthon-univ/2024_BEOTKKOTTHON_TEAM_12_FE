import { useState } from 'react';
import * as S from './style';
import search from '@assets/icons/search.svg';

const Search = () => {
  const [searchInput, SetSearchInput] = useState<string>('');
  return (
    <S.Container>
      <div>
        <img src={search} alt="search" />
      </div>
      <input
        value={searchInput}
        onChange={(e) => SetSearchInput(e.target.value)}
        placeholder="무엇이든 검색해보세요."
      />
    </S.Container>
  );
};

export default Search;
