import { UnivType } from 'types/donationType';
import * as S from './style';

interface GraphRankingType {
  universities: UnivType[];
}

const transformPointToNumber = (point: string) => {
  return parseInt(point.slice(0, -1));
};

const GraphRanking = ({ universities }: GraphRankingType) => {
  const MAX_POINT = transformPointToNumber(universities[0].university_point);
  const MAX_WIDTH = 150;

  return (
    <S.Container>
      {universities.map((univ: UnivType) => (
        <S.BoxUniv key={univ.university_name}>
          <img src={univ.university_image[0]} alt="univ_image" />
          <p className="name">{univ.university_name}</p>
          <S.Bar $width={(transformPointToNumber(univ.university_point) / MAX_POINT) * 150} />
          <div>{univ.university_point}</div>
        </S.BoxUniv>
      ))}
    </S.Container>
  );
};

export default GraphRanking;
