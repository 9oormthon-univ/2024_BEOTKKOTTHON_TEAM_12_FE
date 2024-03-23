import * as S from './style';
import { Button } from '@components/index';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onboardingData } from 'src/data/shared';

const Onboarding = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartPosition, setTouchStartPosition] = useState(0);
  const [touchEndPosition, setTouchEndPosition] = useState(0);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  let mouseDown = false;
  let startX = 0;
  let endX = 0;

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

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartPosition(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndPosition(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const threshold = 50; // 스와이프 판정을 위한 최소 이동 거리
    const direction = touchStartPosition - touchEndPosition; // 이동 방향 및 거리

    // 오른쪽으로 충분히 스와이프 했다면 이전 슬라이드로 이동
    if (direction > threshold) {
      const newIndex = activeIndex + 1 < onboardingData.length ? activeIndex + 1 : activeIndex;
      handleDotClick(newIndex);
    }
    // 왼쪽으로 충분히 스와이프 했다면 다음 슬라이드로 이동
    else if (direction < -threshold) {
      const newIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : activeIndex;
      handleDotClick(newIndex);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseDown = true;
    startX = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mouseDown) return;
    endX = e.clientX;
  };

  const handleMouseUp = () => {
    mouseDown = false;
    const threshold = 50;
    const direction = startX - endX;

    if (direction > threshold) {
      const newIndex = activeIndex + 1 < onboardingData.length ? activeIndex + 1 : activeIndex;
      handleDotClick(newIndex);
    } else if (direction < -threshold) {
      const newIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : activeIndex;
      handleDotClick(newIndex);
    }
  };

  return (
    <>
      <S.Content>
        <S.CarouselContainer
          ref={carouselRef}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {onboardingData.map((data, index) => (
            <S.BoxFlex key={index}>
              <S.BoxImage>
                <img src={data.img_url} alt={`img-${index}`} />
              </S.BoxImage>

              <S.BoxTitle>
                <S.Circle>{data.num}</S.Circle>
                <p className="title">{data.title}</p>
                <p className="description">{data.description[0]}</p>
                <p className="description">{data.description[1]}</p>
              </S.BoxTitle>
            </S.BoxFlex>
          ))}
        </S.CarouselContainer>

        <S.DotContainer>
          {onboardingData.map((_, index) => {
            const bol = index === activeIndex;
            return <S.Dot key={index} $bol={bol} onClick={() => handleDotClick(index)} />;
          })}
        </S.DotContainer>
      </S.Content>

      {activeIndex === 3 && (
        <S.BoxButton>
          <Button
            width="100%"
            $bgcolor="var(--green-6)"
            color="white"
            $padding="16px"
            $fontWeight="bold"
            handleOnClick={() => navigate('/login')}
          >
            시작하기
          </Button>
        </S.BoxButton>
      )}
    </>
  );
};
export default Onboarding;
