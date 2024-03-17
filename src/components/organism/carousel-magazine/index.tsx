import { Carousel } from '@components/index';
import * as S from './style';
import main from '@assets/magazine/main.svg';
import defaultImg from '@assets/images/profile-default-image.svg';

const CarouselMagazine = () => {
  return (
    <S.Container>
      <Carousel $dot="13px" $width="100%" $height="314px">
        <img src={main} alt="main-carousel" />
        <img src={defaultImg} alt="main-carousel" />
      </Carousel>
    </S.Container>
  );
};

export default CarouselMagazine;
