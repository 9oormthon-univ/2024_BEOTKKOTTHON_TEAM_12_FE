import { RankingType, UnivType } from 'types/donationType';
import * as S from './style';
import TextLabel from 'components/atom/text-label';
import { levelUrlArr } from 'utils/levelUrlArr';

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
  const back_color = [
    'var(--green-6)',
    'var(--green-4)',
    'var(--green-4)',
    'var(--grey-3)',
    'var(--grey-3)',
  ];

  return (
    <>
      <S.Header>
        <div className="title">
          <TextLabel size={16} $weight={700} color="var(--grey-7)">
            대학교별 환경 점수 TOP 5
          </TextLabel>

          <img src={levelUrlArr('새싹')} alt="icon" />
        </div>
        <div className="time">
          <TextLabel size={12} $weight={300} color="var(--grey-5)">
            {rankingData.date} {rankingData.time} 기준
          </TextLabel>
        </div>
      </S.Header>

      <S.Container>
        {universities.map((univ: UnivType, index) => (
          <S.BoxUniv key={univ.university_name}>
            <img src={univ.university_image[0]} alt="univ_image" />
            <p className="name">{univ.university_name}</p>
            <S.Bar
              $width={(transformPointToNumber(univ.university_point) / MAX_POINT) * MAX_WIDTH}
              $color={back_color[index]}
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
