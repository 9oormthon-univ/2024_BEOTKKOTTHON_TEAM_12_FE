import * as S from './style';
import { levelUrlArr } from 'utils/levelUrlArr';
import { Button, TextLabel } from 'components/index';
import { Link, useNavigate } from 'react-router-dom';
import { useUnivRanking } from 'hooks/queries/donation/useUnivRanking';
import GraphRanking from 'components/molcule/graph-ranking';

const Ranking = () => {
  const { data: rankingData, status } = useUnivRanking();
  const navigate = useNavigate();

  if (status === 'pending') return null;
  if (status === 'error') return null;

  return (
    <S.Container>
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

      <GraphRanking universities={rankingData.university_list} />

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

      <Button
        $borderRadius="8px"
        $bgcolor="var(--green-6)"
        color="white"
        width="335px"
        fontSize="16px"
        $padding="16px"
        children="직접 방문하여 기부하기 "
        handleOnClick={() => {
          navigate('/donation/visit');
        }}
      />

      <S.MarginBox />
      <Link to={'/donation/request'}>
        <Button
          $borderRadius="8px"
          $bgcolor="var(--green-6)"
          color="white"
          width="335px"
          fontSize="16px"
          $padding="16px"
        >
          비대면 기부하기
        </Button>
      </Link>
    </S.Container>
  );
};

export default Ranking;
