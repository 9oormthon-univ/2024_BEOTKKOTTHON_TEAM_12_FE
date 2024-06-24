import { useState } from 'react';

const usePageMove = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  /*다음 절차로 이동 */
  const goToNextTab = () => {
    setActiveIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : prevIndex));
    window.scrollTo(0, 0); // 페이지의 맨 위로 스크롤 이동
  };
  /*이전 절차로 이동 */
  const goToPreviousTab = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    window.scrollTo(0, 0); // 페이지의 맨 위로 스크롤 이동
  };

  return {
    activeIndex,
    goToNextTab,
    goToPreviousTab,
  };
};

export default usePageMove;
