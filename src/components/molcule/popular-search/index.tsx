import { usePopularSearch } from 'service/product/useProductService';
import * as S from './style';

const list = ['겨울 아우터', '여름 옷', '노스페이스', '냠냠'];

const PopularSearch = () => {
  const { data: popularSearch, status } = usePopularSearch();

  if (status === 'pending') return null;
  if (status === 'error') return null;

  return (
    <>
      <S.Header>
        <p className="title">인기 검색어</p>
        <p className="time">
          {popularSearch.date} {popularSearch.time} 기준
        </p>
      </S.Header>

      {popularSearch.search_name_rank_list.map((name: string, index: number) => (
        <S.ListBox key={name}>
          <p className="number">{index + 1}</p>
          <p className="name">{name}</p>
        </S.ListBox>
      ))}
    </>
  );
};

export default PopularSearch;
