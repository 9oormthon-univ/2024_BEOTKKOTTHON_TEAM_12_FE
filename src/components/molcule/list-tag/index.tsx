import { categories } from 'src/data/shared';
import * as S from './style';
import { useState } from 'react';

const ListTag = () => {
  const [activeCategory, SetActiveCategory] = useState<string>('전체');

  const handleClick = (category: string) => {
    console.log(category);
    SetActiveCategory(category);
  };

  return (
    <S.Container>
      {categories.map((category, index) => (
        <S.Tag
          onClick={() => handleClick(category)}
          $active={category === activeCategory}
          key={index}
        >
          {category}
        </S.Tag>
      ))}
    </S.Container>
  );
};

export default ListTag;
