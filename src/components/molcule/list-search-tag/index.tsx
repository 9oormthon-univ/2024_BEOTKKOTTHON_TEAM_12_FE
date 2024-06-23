import { USER_ID } from 'constants/shared';
import { BoxTag, Tag } from 'components/index';
import { AiOutlineClose } from 'react-icons/ai';
import { useSearchActions } from 'store/search';
import { useState } from 'react';
import { useRecentSearch } from 'queries/products/useRecentSearch';
import { useTagDelete } from 'queries/products/useTagDelete';

const ListSearchTag = () => {
  const { data: recentSearchData, status } = useRecentSearch(USER_ID);
  const { mutate: tagDeleteMutation } = useTagDelete();
  const { changeSearchData } = useSearchActions();

  const handleClickClose = (search: string) => {
    tagDeleteMutation(search);
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

  if (status === 'pending') return null;
  if (status === 'error') return null;

  return (
    <BoxTag
      onMouseDown={startDragging}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={whileDragging}
    >
      {recentSearchData.map((search: string, index: number) => (
        <Tag onClick={() => changeSearchData(search)} key={index}>
          <p>{search}</p>
          <div className="close" onClick={() => handleClickClose(search)}>
            <AiOutlineClose color="var(--grey-4)" />
          </div>
        </Tag>
      ))}
    </BoxTag>
  );
};

export default ListSearchTag;
