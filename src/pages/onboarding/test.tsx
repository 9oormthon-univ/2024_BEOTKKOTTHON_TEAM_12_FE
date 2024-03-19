import * as S from './style';

import clothes from '@assets/onboarding/clothes.svg';
import donation from '@assets/onboarding/donation.svg';
import earth from '@assets/onboarding/earth.svg';
import { useRef, useState } from 'react';

const items = [clothes, donation, earth];

import styled from 'styled-components';

// 이미지들의 URL

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto; /* 가로로 스크롤 가능하도록 설정 */
  scroll-snap-type: x mandatory; /* 스크롤 단위로 스냅하도록 설정 */
  -webkit-overflow-scrolling: touch; /* iOS Safari에서 스크롤 부드럽게 처리 */
  touch-action: pan-y; /* 세로 스크롤은 가능하나 가로 스크롤은 터치 액션을 막음 */

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BoxFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto; /* Flex 아이템이 자동으로 크기를 조절하지 않도록 설정 */
  margin-top: 100px;
  width: 100%;
  height: auto;
  scroll-snap-align: start; /* 스크롤 단위로 스냅하도록 설정 */
`;

const BoxImage = styled.div`
  display: grid;
  place-items: center;
  height: 300px;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
interface DotProps {
  $bol: boolean;
}
const Dot = styled.div<DotProps>`
  width: ${(props) => (props.$bol ? '24px' : '8px')};
  height: 8px;
  border-radius: 100px;
  background-color: ${(props) => (props.$bol ? 'var(--green-6)' : 'var(--grey-3)')};
  margin: 0 8px;
  cursor: pointer;
`;

const OnboardingTest = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = () => {
    const index = Math.round(carouselRef.current.scrollLeft / carouselRef.current.offsetWidth);
    setActiveIndex(index);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    carouselRef.current.scrollTo({
      left: index * carouselRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <BoxFlex>
          <BoxImage>
            <img src={clothes} alt="clothes" />
          </BoxImage>
          <S.BoxTitle>
            <S.Circle>1</S.Circle>
            <p className="title">옷장에서 잠자고 있는 옷들을 깨워주세요.</p>
            <p className="description">WEAR가 공간만 차지하는 더 이상 입지 않는</p>
            <p className="description">옷들의 새로운 주인을 찾아드립니다!</p>
          </S.BoxTitle>
        </BoxFlex>

        <BoxFlex>
          <BoxImage>
            <img src={earth} alt="earth" />
          </BoxImage>
          <S.BoxTitle>
            <S.Circle>2</S.Circle>
            <p className="title">당신의 소중한 나눔이 WEAR에서 시작됩니다.</p>
            <p className="description">의류 기부를 통해 사랑이 필요한 분들과</p>
            <p className="description">지구에게 따뜻함을 선물해 보세요.</p>
          </S.BoxTitle>
        </BoxFlex>

        <BoxFlex>
          <BoxImage>
            <img src={donation} alt="donation" />
          </BoxImage>
          <S.BoxTitle>
            <S.Circle>3</S.Circle>
            <p className="title">WEAR와 함께 환경보호도, 기부도 재밌게!</p>
            <p className="description">중고 거래와 기부를 하면 쌓이는 환경 점수!</p>
            <p className="description">대학별 환경 점수 순위도 확인해보세요.</p>
          </S.BoxTitle>
        </BoxFlex>
      </CarouselContainer>
      <DotContainer>
        {items.map((item, index) => {
          const bol = index === activeIndex;
          return <Dot key={index} $bol={bol} onClick={() => handleDotClick(index)} />;
        })}
      </DotContainer>
    </div>
  );
};
export default OnboardingTest;
