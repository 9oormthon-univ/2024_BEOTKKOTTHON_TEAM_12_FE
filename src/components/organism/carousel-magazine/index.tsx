import { Carousel } from "components/index";
import * as S from "./style";
import main from "assets/magazine/main.svg";
const CarouselMagazine = () => {
  return (
    <S.Container>
      <Carousel $dot="13px" $width="100%" $height="314px">
        {[...Array(5)].map((_, index) => (
          <img src={main} key={`img-${index}`} alt="main-carousel" />
        ))}
      </Carousel>
    </S.Container>
  );
};

export default CarouselMagazine;
