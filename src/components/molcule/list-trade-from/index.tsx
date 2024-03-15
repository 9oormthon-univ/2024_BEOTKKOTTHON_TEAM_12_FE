import { SaleItem } from 'src/types/types';
import * as S from './style';

interface ListTradeFormProps {
  formData: SaleItem;
  setFormData: (value: SaleItem) => void;
  type: string;
  list: string[];
}

const ListTradeForm = ({ formData, setFormData, type, list }: ListTradeFormProps) => {
  const handleClick = (element: string) => {
    if (type === 'price') {
      const matches = element.match(/\d+/g);
      //null이 아닐 때만 실행
      if (matches) {
        const numbers = matches.join('');
        const updated = Number(formData.price) + Number(numbers);
        setFormData({
          ...formData,
          price: updated,
        });
      }
    } else if (type === 'place') {
      setFormData({
        ...formData,
        place: element,
      });
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
