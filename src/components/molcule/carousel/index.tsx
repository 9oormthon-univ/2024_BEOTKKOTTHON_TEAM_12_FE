import * as S from './style';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  $dot: string;
  $width: string;
  $height: string;
  children: React.ReactNode;
}

const Carousel = ({ $dot, $width, $height, children }: CarouselProps) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Container className="carousel" $width={$width} $height={$height}>
      <S.BoxSlider $dot={$dot} $width={$width} $height={$height} {...settings}>
        {children}
      </S.BoxSlider>
    </S.Container>
  );
};

export default Carousel;
