import * as S from './style';
import icon from '@assets/icons/profile-icon-level1.svg';
import ranking from '@assets/donation/ranking.svg';
import { Button } from '@components/index';
import { Link } from 'react-router-dom';

const Ranking = () => {
  return (
    <>
      <S.Header>
        <div className="title">
          <p>대학교별 환경 점수 TOP 5</p>
          <img src={icon} alt="icon" />
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

      <Link to={'/donation/select'}>
        <Button $bgcolor="var(--green-6)" color="white" width="100%" fontSize="16px" padding="16px">
          기부하기
        </Button>
      </Link>
    </>
  );
};

export default Ranking;
