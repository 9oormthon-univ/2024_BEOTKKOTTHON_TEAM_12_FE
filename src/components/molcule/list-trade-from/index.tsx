import * as S from './style';

interface ListTradeFormProps {
  list: string[];
}

const ListTradeForm = ({ list }: ListTradeFormProps) => {
  return (
    <S.Container>
      {list.map((element, index) => (
        <S.TagPrice key={index}>
          <p>{element}</p>
        </S.TagPrice>
      ))}
    </S.Container>
  );
};

export default ListTradeForm;
