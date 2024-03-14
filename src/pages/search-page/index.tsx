import { Label } from '@components/index';
import * as S from './style';
import HeaderSearch from '@components/molcule/header-search';
import ListSearchTag from '@components/molcule/list-search-tag';

const SearchPage = () => {
  return (
    <S.Container>
      <section className="search">
        <HeaderSearch />
      </section>

      <section className="recent-search">
        <Label>
          <p className="label">최근 검색어</p>
          <p className="sub">전체 삭제</p>
        </Label>
      </section>

      <section className="tags">
        <ListSearchTag />
      </section>
    </S.Container>
  );
};

export default SearchPage;
