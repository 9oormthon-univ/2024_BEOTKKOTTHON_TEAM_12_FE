import { categories } from 'src/data/shared';
import { useEffect } from 'react';
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

  // const [activeCategory, setActiveCategory] = useState<string>('전체');
  const list = isform ? categories.slice(1) : categories;

  // useEffect(() => {
  //   if (!isform) {
  //     setFilteredProducts(activeCategory);
  //   }
  // }, [activeCategory, isform]);

  useEffect(() => {
    if (isform) {
      setActiveCategory(formData.category_id as string);
    }
  }, [formData.category_id, isform]);

  const handleClick = (category_id: string) => {
    if (isform) {
      setFormData('category_id', category_id);
    }
    setActiveCategory(category_id);
  };

  return (
    <BoxTag>
      {list.map((category_id, index) => (
        <Tag
          onClick={() => handleClick(category_id)}
          $active={category_id === activeCategory}
          key={index}
        >
          {category_id}
        </Tag>
      ))}
    </BoxTag>
  );
};

export default ListTag;
