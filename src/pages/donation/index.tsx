import { Nav, Ranking } from '@components/index';
import * as S from './style';

const Donation = () => {
  return (
    <>
      <S.Content>
        <section className="ranking">
          <Ranking />
        </section>
      </S.Content>

      <Nav currentTab="기부" />
    </>
  );
};

export default Donation;
