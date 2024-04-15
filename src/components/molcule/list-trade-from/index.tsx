import { useProductFormData, useFormDataActions } from 'store/productFormData';
import * as S from './style';

interface ListTradeFormProps {
  type: string;
  list: string[];
}

const ListTradeForm = ({ type, list }: ListTradeFormProps) => {
  const formData = useProductFormData();
  const { changeProductFormData } = useFormDataActions();

  const handleClick = (element: string) => {
    if (type === 'price') {
      const matches = element.match(/\d+/g);
      //null이 아닐 때만 실행
      if (matches) {
        const numbers = matches.join('');
        const updated = Number(formData.price) + Number(numbers);
        changeProductFormData('price', updated);
      }
    } else if (type === 'place') {
      changeProductFormData('place', element);
    }
  };

  return (
    <S.Container>
      {list.map((element, index) => (
        <S.Tag key={index} onClick={() => handleClick(element)}>
          <p>{element}</p>
        </S.Tag>
      ))}
    </S.Container>
  );
};

export default ListTradeForm;
