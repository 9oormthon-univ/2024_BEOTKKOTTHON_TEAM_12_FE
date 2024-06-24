import { ONBOARDING_DATA } from 'constants/shared';
import { useRef, useState } from 'react';

const useTouchEvent = () => {
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
      const newIndex = activeIndex + 1 < ONBOARDING_DATA.length ? activeIndex + 1 : activeIndex;
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
      const newIndex = activeIndex + 1 < ONBOARDING_DATA.length ? activeIndex + 1 : activeIndex;
      handleDotClick(newIndex);
    } else if (direction < -threshold) {
      const newIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : activeIndex;
      handleDotClick(newIndex);
    }
  };

  return {
    activeIndex,
    carouselRef,
    handleScroll,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleDotClick,
  };
};

export default useTouchEvent;
