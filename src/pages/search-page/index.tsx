import { Label } from '@components/index';
import * as S from './style';
import HeaderSearch from '@components/molcule/header-search';
import ListSearchTag from '@components/molcule/list-search-tag';
import { useState } from 'react';

const SearchPage = () => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <S.Container>
      <section className="search">
        <HeaderSearch setFocus={setFocus} />
      </section>

      {!focus && (
        <>
          <section className="recent-search">
            <Label>
              <p className="label">최근 검색어</p>
              <p className="sub">전체 삭제</p>
            </Label>
          </section>

          <section className="tags">
            <ListSearchTag />
          </section>
        </>
      )}
    </S.Container>
  );
};

export default SearchPage;
