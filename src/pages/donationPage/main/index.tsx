import { BoxDonationImg, Nav, Ranking, TextLabel, Header } from 'components/index';
import * as S from './style';
import logo from 'assets/logo/logo.svg';
import homeless from 'assets/donation/homeless.svg';
import { useNavigate } from 'react-router';
import { IoIosNotificationsOutline } from 'react-icons/io';

const DonationMain = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <IoIosNotificationsOutline className="right" />
      </Header>
      <S.Content>
        <section className="ranking">
          <Ranking />
        </section>

        <section className="partner">
          <S.MapWrapper>
            <div className="homeless">
              <img src={homeless} alt="homeless" onClick={() => navigate('/donation/homeless')} />
            </div>
            <TextLabel size={16} $weight={700} color="var(--grey-7)">
              함께하는 기부 단체
            </TextLabel>
            <TextLabel size={12} $weight={400} color="var(--grey-7)">
              총 3개의 기부단체와 함께하고 있어요!
            </TextLabel>
          </S.MapWrapper>

          <S.ImageWrapper>
            <BoxDonationImg />
          </S.ImageWrapper>
        </section>
      </S.Content>
      <Nav currentTab="홈" />
    </>
  );
};

export default DonationMain;
