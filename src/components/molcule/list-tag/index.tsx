import { categories } from 'src/data/shared';
import { useState } from 'react';
import { BoxTag, Tag } from '@components/index';
import { FormDataType } from '@components/organism/form-trade';

interface ListTagProps {
  formData?: FormDataType;
  setFormData?: (value: FormDataType) => void;
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
