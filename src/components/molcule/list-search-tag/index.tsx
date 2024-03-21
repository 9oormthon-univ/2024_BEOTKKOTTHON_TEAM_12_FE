import { searches } from 'src/data/shared';
import { BoxTag, Tag } from '@components/index';
import close from '@assets/icons/close_small.svg';
import { useSearchActions } from 'src/store/search';
import { useState } from 'react';

const ListSearchTag = () => {
  const { changeSearchData } = useSearchActions();

  const handleClickClose = () => {
    // 데이터에서 삭제하고 다시 올리기
  };

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 마우스 이벤트 핸들러
  const startDragging = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const whileDragging = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return (
    <BoxTag
      onMouseDown={startDragging}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={whileDragging}
    >
      {searches.map((search, index) => (
        <Tag onClick={() => changeSearchData(search)} key={index}>
          <p>{search}</p>
          <div className="close" onClick={handleClickClose}>
            <img src={close} alt="close" />
          </div>
        </Tag>
      ))}
    </BoxTag>
  );
};

export default ListSearchTag;
