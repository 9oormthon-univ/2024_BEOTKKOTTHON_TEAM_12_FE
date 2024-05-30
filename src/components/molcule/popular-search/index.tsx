import * as S from './style';

const list = ['겨울 아우터', '여름 옷', '노스페이스', '냠냠'];

const PopularSearch = () => {
  return (
    <>
      <S.Header>
        <p className="title">인기 검색어</p>
        <p className="time">03.11 16:00 기준</p>
      </S.Header>

      {list.map((name, index) => (
        <S.ListBox key={name}>
          <p className="number">{index + 1}</p>
          <p className="name">{name}</p>
        </S.ListBox>
      ))}
    </>
  );
};

export default PopularSearch;
