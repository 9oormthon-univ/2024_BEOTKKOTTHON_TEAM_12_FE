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
      const updated = Number(formData.price) + Number(element.match(/\d+/g).join(''));
      setFormData({
        ...formData,
        price: updated,
      });
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
