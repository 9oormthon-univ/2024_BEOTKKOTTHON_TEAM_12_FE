import * as S from './style';
import search from '@assets/icons/search.svg';

const Search = () => {
  return (
    <S.Container>
      <div>
        <img src={search} alt="search" />
      </div>
      <input placeholder="무엇이든 검색해보세요." />
    </S.Container>
  );
};

export default Search;
