import { Link } from 'react-router-dom';
import * as S from './style';
import { Button } from '@components/index';
import logo from '@assets/logo/donation-logo.svg';

const DonationFinish = () => {
  return (
    <>
      <S.Container>
        <S.BoxImg>
          <img src={logo} alt="logo" />
        </S.BoxImg>
        <p className="green">기부가 완료되었습니다.</p>
        <div className="grey">
          <p>기부 인증 진행 절차는 마이페이지 &gt; 기부 내역에서</p>
          <p>확인하실 수 있습니다.</p>
        </div>
      </S.Container>
      <Link to={'/donation'}>
        <S.BtnNext>
          <Button
            width="100%"
            color="white"
            $bgcolor="var(--green-6)"
            borderRadius="8px"
            fontSize="16px"
            padding="16px"
          >
            확인
          </Button>
        </S.BtnNext>
      </Link>
    </>
  );
};

export default DonationFinish;
