import { categories } from 'src/data/shared';
import { useEffect, useState } from 'react';
import { BoxTag, Tag } from '@components/index';
import { useActiveCategory, useProductsActions } from 'src/store/products';
import { useFormData, useFormDataActions } from 'src/store/formData';
// 받아온 정보와 일치하는 카테고리 색상
interface ListTagProps {
  isform?: boolean;
}

const ListTag = ({ isform }: ListTagProps) => {
  const formData = useFormData();
  const { setFormData } = useFormDataActions();

  const activeCategory = useActiveCategory();
  const { setActiveCategory } = useProductsActions();

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
      setFormData('category', category);
    }
    setActiveCategory(category);
  };

  useEffect(() => {
    if (isform) {
      setActiveCategory(formData.category as string);
    }
  }, [formData.category, isform]);

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
