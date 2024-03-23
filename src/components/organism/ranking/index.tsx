import * as S from './style';
import { levelUrlArr } from 'utils/levelUrlArr';
import ranking from 'assets/donation/ranking.png';
import { Button } from 'components/index';
import { Link, useNavigate } from 'react-router-dom';

const Ranking = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Header>
        <div className="title">
          <p>대학교별 환경 점수 TOP 5</p>
          <img src={levelUrlArr('새싹')} alt="icon" />
        </div>
        <p className="time">03.11 16:00 기준</p>
      </S.Header>

      <S.Graph>
        <img src={ranking} alt="ranking" />
      </S.Graph>

      <S.Text>
        <p>
          현재 1위 <span>"한양대학교"</span>는 총 <span>19,900포인트</span>이고
        </p>
        <p>
          <span>190번</span>의 거래와 <span>134번</span>의 기부가 이루어졌어요.
        </p>
      </S.Text>

      <Button
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
      <Link to={'/donation/select'}>
        <Button
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
