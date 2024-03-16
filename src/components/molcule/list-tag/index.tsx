import { categories } from 'src/data/shared';
import { useEffect, useState } from 'react';
import { BoxTag, Tag } from '@components/index';
import { useProductsActions } from 'src/store/products';
import { useFormData, useFormDataActions } from 'src/store/formData';
// 받아온 정보와 일치하는 카테고리 색상
interface ListTagProps {
  isform?: boolean;
}

const ListTag = ({ isform }: ListTagProps) => {
  const formData = useFormData();
  const { setFilteredProducts } = useProductsActions();
  const { setFormData } = useFormDataActions();

  const [activeCategory, SetActiveCategory] = useState<string>('전체');
  const list = isform ? categories.slice(1) : categories;

  useEffect(() => {
    if (!isform) {
      setFilteredProducts(activeCategory);
    }
  }, [activeCategory, isform]);

  useEffect(() => {
    if (isform) {
      SetActiveCategory(formData.category as string);
    }
  }, [formData.category, isform]);

  const handleClick = (category: string) => {
    if (isform) {
      setFormData('category', category);
    }
    SetActiveCategory(category);
  };

  return (
    <BoxTag>
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
