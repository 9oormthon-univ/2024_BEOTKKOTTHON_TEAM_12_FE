import { categories } from 'data/shared';
import { useEffect, useState } from 'react';
import { BoxTag, Tag } from 'components/index';
import { useFormDataActions } from 'store/formData';
import { useActiveCategory, useProductListActions } from 'store/productListData';

interface ListTagProps {
  isform?: boolean;
}

const ListTag = ({ isform }: ListTagProps) => {
  const { setFormData } = useFormDataActions();

  const activeCategory = useActiveCategory();
  const { setActiveCategory } = useProductListActions();

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const list = isform ? categories.slice(1) : categories;

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

  const handleClick = (category: string) => {
    if (isform) {
      setFormData('category_name', category);
    }
    setActiveCategory(category);
  };

  return (
    <BoxTag
      onMouseDown={startDragging}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={whileDragging}
    >
      {list.map((category, index) => (
        <Tag
          onClick={() => handleClick(category)}
          $active={category === activeCategory}
          key={index}
        >
          {category}
        </Tag>
      ))}
    </BoxTag>
  );
};

export default ListTag;
