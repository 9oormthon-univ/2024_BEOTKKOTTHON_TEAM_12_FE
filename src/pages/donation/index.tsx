import { BoxDonationImg, Nav, Ranking } from '@components/index';
import * as S from './style';

const Donation = () => {
  return (
    <>
      <S.Content>
        <section className="ranking">
          <Ranking />
        </section>

        <section className="partner">
          <p>함께하는 기부 단체</p>
          <BoxDonationImg />
        </section>
      </S.Content>

      <Nav currentTab="기부" />
    </>
  );
};

export default Donation;
