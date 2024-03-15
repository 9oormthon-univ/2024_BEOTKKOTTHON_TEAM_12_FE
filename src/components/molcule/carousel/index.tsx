import * as S from './style';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SaleItem } from 'src/types/types';

interface CarouselProps {
  product: SaleItem | undefined;
}

const Carousel = ({ product }: CarouselProps) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Container>
      <S.BoxSlider {...settings}>
        {product?.recievedImgUrl?.map((url, i) => <img src={url} alt={`img-${i}`} key={i} />)}
      </S.BoxSlider>
    </S.Container>
  );
};

export default Carousel;
