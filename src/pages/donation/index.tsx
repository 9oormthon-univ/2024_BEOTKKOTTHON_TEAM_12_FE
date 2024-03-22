import { BoxDonationImg, Nav, Ranking, TextLabel, KakaoMap, Header } from '@components/index';
import * as S from './style';
import logo from '@assets/logo/logo.svg';
import notifications from '@assets/icons/notifications.svg';
const Donation = () => {
  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <img className="right" src={notifications} alt="notifications" />
      </Header>
      <S.Content>
        <section className="ranking">
          <Ranking />
        </section>

        <section className="ranking">
          <S.MapWrapper>
            <TextLabel
              text="직접 방문해서 기부하고 싶다면?"
              size={16}
              $weight={700}
              color="var(--grey-7)"
            />
            <TextLabel
              text="아래 지도를 참고하여 근처 아름다우 가게에 방문해보아요."
              size={12}
              $weight={400}
              color="var(--grey-7)"
            />
            <KakaoMap />
          </S.MapWrapper>
        </section>

        <section className="partner">
          <S.MapWrapper>
            <TextLabel text="함께하는 기부 단체" size={16} $weight={700} color="var(--grey-7)" />
            <TextLabel
              text="총 3개의 기부단체와 함께하고 있어요!"
              size={12}
              $weight={400}
              color="var(--grey-7)"
            />
          </S.MapWrapper>

          <div className="partner-box">
            <BoxDonationImg />
          </div>
        </section>
      </S.Content>
      <Nav currentTab="기부" />
    </>
  );
};

export default Donation;
