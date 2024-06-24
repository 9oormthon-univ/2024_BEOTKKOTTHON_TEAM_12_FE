import { CATEGORIES } from 'constants/shared';
import { BoxTag, Tag } from 'components/index';
import { useFormDataActions } from 'store/productFormData';
import { useActiveCategory, useProductListActions } from 'store/productListData';
import { useMouseEventHandler } from 'utils/useMouseEventHandler';

interface ListTagProps {
  isform?: boolean;
}

const ListTag = ({ isform }: ListTagProps) => {
  const { changeProductFormData } = useFormDataActions();
  const activeCategory = useActiveCategory();
  const { setActiveCategory } = useProductListActions();
  const { startDragging, stopDragging, whileDragging } = useMouseEventHandler();

  const list = isform ? CATEGORIES.slice(1) : CATEGORIES;

  const handleClick = (category: string) => {
    if (isform) {
      changeProductFormData('category_name', category);
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
