import * as S from './style';
import { Button } from 'components/index';
import { Link, useNavigate } from 'react-router-dom';
import { useUnivRanking } from 'hooks/queries/donation/useUnivRanking';
import GraphRanking from 'components/molcule/graph-ranking';

const Ranking = () => {
  const navigate = useNavigate();
  const { data: rankingData, status } = useUnivRanking();

  if (status === 'pending') return null;
  if (status === 'error') return null;

  return (
    <S.Container>
      <GraphRanking rankingData={rankingData} />

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
