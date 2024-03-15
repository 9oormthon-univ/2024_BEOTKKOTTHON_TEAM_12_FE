import { categories } from 'src/data/shared';
import { useState } from 'react';
import { BoxTag, Tag } from '@components/index';
import { SaleItem } from 'src/types/types';

interface ListTagProps {
  isform?: boolean;
  formData?: SaleItem;
  setFormData?: (value: SaleItem) => void;
}

const ListTag = ({ isform, formData, setFormData }: ListTagProps) => {
  const [activeCategory, SetActiveCategory] = useState<string>('전체');
  const list = isform ? categories.slice(1) : categories;

  const handleClick = (category: string) => {
    if (setFormData && formData) {
      setFormData({ ...formData, category });
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
