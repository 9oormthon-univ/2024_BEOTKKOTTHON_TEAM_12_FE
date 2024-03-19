import * as S from './style';

import clothes from '@assets/onboarding/clothes.svg';
import donation from '@assets/onboarding/donation.svg';
import earth from '@assets/onboarding/earth.svg';
import { Button } from '@components/index';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const items = [clothes, donation, earth];

const Onboarding = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (carouselRef.current !== null) {
      const index = Math.round(carouselRef.current.scrollLeft / carouselRef.current.offsetWidth);
      setActiveIndex(index);
    }
  };

  const handleDotClick = (index: number) => {
    if (carouselRef.current !== null) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });

      setTimeout(() => {
        setActiveIndex(index);
      }, 200);
    }
  };

  return (
    <div>
      <S.CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <S.BoxFlex>
          <S.BoxImage>
            <img src={clothes} alt="clothes" />
          </S.BoxImage>
          <S.BoxTitle>
            <S.Circle>1</S.Circle>
            <p className="title">옷장에서 잠자고 있는 옷들을 깨워주세요.</p>
            <p className="description">WEAR가 공간만 차지하는 더 이상 입지 않는</p>
            <p className="description">옷들의 새로운 주인을 찾아드립니다!</p>
          </S.BoxTitle>
        </S.BoxFlex>

        <S.BoxFlex>
          <S.BoxImage>
            <img src={earth} alt="earth" />
          </S.BoxImage>
          <S.BoxTitle>
            <S.Circle>2</S.Circle>
            <p className="title">당신의 소중한 나눔이 WEAR에서 시작됩니다.</p>
            <p className="description">의류 기부를 통해 사랑이 필요한 분들과</p>
            <p className="description">지구에게 따뜻함을 선물해 보세요.</p>
          </S.BoxTitle>
        </S.BoxFlex>

        <S.BoxFlex>
          <S.BoxImage>
            <img src={donation} alt="donation" />
          </S.BoxImage>
          <S.BoxTitle>
            <S.Circle>3</S.Circle>
            <p className="title">WEAR와 함께 환경보호도, 기부도 재밌게!</p>
            <p className="description">중고 거래와 기부를 하면 쌓이는 환경 점수!</p>
            <p className="description">대학별 환경 점수 순위도 확인해보세요.</p>
          </S.BoxTitle>
        </S.BoxFlex>
      </S.CarouselContainer>
      <S.DotContainer>
        {items.map((_, index) => {
          const bol = index === activeIndex;
          return <S.Dot key={index} $bol={bol} onClick={() => handleDotClick(index)} />;
        })}
      </S.DotContainer>

      {activeIndex === 2 && (
        <S.BoxButton>
          <Button
            $bgcolor="var(--green-6)"
            color="white"
            handleOnClick={() => navigate('/product')}
          >
            시작
          </Button>
        </S.BoxButton>
      )}
    </div>
  );
};
export default Onboarding;
