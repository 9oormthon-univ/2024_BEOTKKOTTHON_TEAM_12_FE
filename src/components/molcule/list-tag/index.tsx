import { categories } from 'src/data/shared';
import { useEffect, useState } from 'react';
import { BoxTag, Tag } from '@components/index';
import { useLocation } from 'react-router-dom';
import { useProductsActions } from 'src/store/products';
import { useFormDataActions } from 'src/store/formData';

interface ListTagProps {
  isform?: boolean;
}

const ListTag = ({ isform }: ListTagProps) => {
  const location = useLocation();
  const { setFilteredProducts } = useProductsActions();
  const { setFormData } = useFormDataActions();

  const [activeCategory, SetActiveCategory] = useState<string>('전체');
  const list = isform ? categories.slice(1) : categories;

  useEffect(() => {
    if (location !== '/product/new') {
      setFilteredProducts(activeCategory);
    }
  }, [activeCategory]);

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
