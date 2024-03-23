import { CarouselMagazine, Nav } from 'components/index';
import banner1 from 'assets/magazine/banner1.svg';
import banner2 from 'assets/magazine/banner2.svg';
import quiz from 'assets/magazine/quiz.svg';
import * as S from './style';
import { Link } from 'react-router-dom';

const Magazine = () => {
  return (
    <>
      <S.Content>
        <section className="carousel">
          <CarouselMagazine />
        </section>

        <section className="banner1">
          <img src={banner1} alt="banner1" />
        </section>

        <section className="quiz">
          <Link to={'/magazine/quiz'}>
            <img src={quiz} alt="quiz" />
          </Link>
        </section>

        <section className="banner2">
          <img src={banner2} alt="banner2" />
        </section>
      </S.Content>

      <Nav currentTab="매거진" />
    </>
  );
};

export default Magazine;
