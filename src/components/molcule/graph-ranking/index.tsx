import { RankingType, UnivType } from 'types/donationType';
import * as S from './style';

interface GraphRankingType {
  rankingData: RankingType;
}

const transformPointToNumber = (point: string) => {
  return parseInt(point.slice(0, -1));
};

const GraphRanking = ({ rankingData }: GraphRankingType) => {
  const universities = rankingData.university_list;
  const MAX_POINT = transformPointToNumber(rankingData.first_total_point);
  const MAX_WIDTH = 150;

  return (
    <>
      <S.Container>
        {universities.map((univ: UnivType) => (
          <S.BoxUniv key={univ.university_name}>
            <img src={univ.university_image[0]} alt="univ_image" />
            <p className="name">{univ.university_name}</p>
            <S.Bar
              $width={(transformPointToNumber(univ.university_point) / MAX_POINT) * MAX_WIDTH}
            />
            <div>{univ.university_point}</div>
          </S.BoxUniv>
        ))}
      </S.Container>

      <S.Text>
        <p>
          현재 1위 <span>{rankingData.first_university_name}</span>는 총{' '}
          <span>{rankingData.first_total_point}</span>이고
        </p>
        <p>
          <span>{rankingData.first_product_count}</span>의 거래와{' '}
          <span>{rankingData.first_donation_count}</span>의 기부가 이루어졌어요.
        </p>
      </S.Text>
    </>
  );
};

export default GraphRanking;
