import { categories } from 'src/data/shared';
import { useEffect, useState } from 'react';
import { BoxTag, Tag } from '@components/index';
import { SaleItem } from 'src/types/types';
import { useLocation } from 'react-router-dom';
import { useProductsActions } from 'src/store/products';

interface ListTagProps {
  isform?: boolean;
  formData?: SaleItem;
  setFormData?: (value: SaleItem) => void;
}

const ListTag = ({ isform, formData, setFormData }: ListTagProps) => {
  const location = useLocation();
  const { setFilteredProducts } = useProductsActions();

  const [activeCategory, SetActiveCategory] = useState<string>('전체');
  const list = isform ? categories.slice(1) : categories;

  useEffect(() => {
    if (location !== '/product/new') {
      setFilteredProducts(activeCategory);
    }
  }, [activeCategory]);

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
