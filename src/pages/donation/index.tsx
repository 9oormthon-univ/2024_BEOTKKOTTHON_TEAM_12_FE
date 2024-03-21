import { BoxDonationImg, Nav, Ranking, TextLabel } from '@components/index';
import * as S from './style';

const Donation = () => {
  return (
    <>
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
          </S.MapWrapper>
        </section>

        <section className="partner">
          <S.MapWrapper>
            <TextLabel text="함께하는 기부 단체" size={16} $weight={700} color="var(--grey-7)" />
          </S.MapWrapper>

          <BoxDonationImg />
        </section>
      </S.Content>

      <Nav currentTab="기부" />
    </>
  );
};

export default Donation;
