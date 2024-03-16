import { Carousel, Header } from '@components/index';
import * as S from './style';
import logo from '@assets/logo/logo.svg';
import search from '@assets/icons/search.svg';
import defaltImg from '@assets/images/product-default-img.png';

const Magazine = () => {
  return (
    <S.Container>
      <section className="header">
        <Header>
          <img src={logo} alt="logo" />
          <img className="right" src={search} alt="search" />
        </Header>
      </section>

      <section className="main-carousel">
        <Carousel>
          <img src={defaltImg} alt="main-carousel" />
          <img src={defaltImg} alt="main-carousel" />
        </Carousel>
      </section>
    </S.Container>
  );
};

export default Magazine;
