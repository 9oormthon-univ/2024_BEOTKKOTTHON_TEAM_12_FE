import { categories } from 'src/data/shared';
import { useState } from 'react';
import { BoxTag, Tag } from '@components/index';

const ListTag = () => {
  const [activeCategory, SetActiveCategory] = useState<string>('전체');

  const handleClick = (category: string) => {
    console.log(category);
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
