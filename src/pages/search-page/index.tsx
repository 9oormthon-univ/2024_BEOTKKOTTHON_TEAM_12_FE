import { Label, Search } from '@components/index';
import * as S from './style';
import ListSearchTag from '@components/molcule/list-search-tag';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <section className="search">
        <S.HeaderSearch>
          <Search />
          <p className="cancle" onClick={() => navigate('/')}>
            취소
          </p>
        </S.HeaderSearch>
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
