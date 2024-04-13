import { categories } from 'data/shared';
import { BoxTag, Tag } from 'components/index';
import { useFormDataActions } from 'store/formData';
import { useActiveCategory, useProductListActions } from 'store/productListData';
import { useMouseEventHandler } from 'hooks/useMouseEventHandler';

interface ListTagProps {
  isform?: boolean;
}

const ListTag = ({ isform }: ListTagProps) => {
  const { setFormData } = useFormDataActions();
  const activeCategory = useActiveCategory();
  const { setActiveCategory } = useProductListActions();
  const { startDragging, stopDragging, whileDragging } = useMouseEventHandler();

  const list = isform ? categories.slice(1) : categories;

  const handleClick = (category: string) => {
    if (isform) {
      setFormData('category_name', category);
    }
    setActiveCategory(category);
  };

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
