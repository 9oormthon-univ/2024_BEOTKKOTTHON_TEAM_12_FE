import { Label, Search } from 'components/index';
import * as S from './style';
import ListSearchTag from 'components/molcule/list-search-tag';
import { useNavigate } from 'react-router-dom';
import { useSearchActions } from 'store/search';
import { useRecentSearch } from 'hooks/queries/products/useRecentSearch';
import { userId } from 'data/shared';

const SearchPage = () => {
  const navigate = useNavigate();
  const { changeSearchData } = useSearchActions();
  const { data: recentSearchData } = useRecentSearch(userId);
  console.log(recentSearchData);

  const handleClickCancle = () => {
    changeSearchData('');
    navigate(-1);
  };

  return (
    <>
      <S.SectionSearch>
        <Search />
        <p className="cancle" onClick={handleClickCancle}>
          취소
        </p>
      </S.SectionSearch>

      <S.Content>
        <section className="recent-search">
          <Label>
            <p className="label">최근 검색어</p>
            <p className="sub">전체 삭제</p>
          </Label>
        </section>

        <section className="tags">
          <ListSearchTag />
        </section>
      </S.Content>
    </>
  );
};

export default SearchPage;
