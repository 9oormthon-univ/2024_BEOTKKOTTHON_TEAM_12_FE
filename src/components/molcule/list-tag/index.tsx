import { categories } from 'src/data/shared';
import { useState } from 'react';
import { BoxTag, Tag } from '@components/index';
import { SaleItem } from 'src/types/types';

interface ListTagProps {
  formData?: SaleItem;
  setFormData?: (value: SaleItem) => void;
}

const ListTag = ({ formData, setFormData }: ListTagProps) => {
  const [activeCategory, SetActiveCategory] = useState<string>('전체');

  const handleClick = (category: string) => {
    if (setFormData && formData) {
      setFormData({ ...formData, category });
    }
    SetActiveCategory(category);
  };

  return (
    <BoxTag>
      {categories.map((category, index) => (
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
