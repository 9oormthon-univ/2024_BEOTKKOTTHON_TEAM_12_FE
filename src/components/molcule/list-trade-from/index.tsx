import { useFormData, useFormDataActions } from 'src/store/formData';
import * as S from './style';

interface ListTradeFormProps {
  type: string;
  list: string[];
}

const ListTradeForm = ({ type, list }: ListTradeFormProps) => {
  const formData = useFormData();
  const { setFormData } = useFormDataActions();

  const handleClick = (element: string) => {
    if (type === 'price') {
      const updated = formData.price + Number(element.match(/\d+/g).join(''));
      setFormData('price', updated);
    } else if (type === 'place') {
      setFormData('place', element);
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
