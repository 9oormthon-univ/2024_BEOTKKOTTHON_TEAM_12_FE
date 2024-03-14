import { categories } from 'src/data/shared';
import * as S from './style';

const ListTag = () => {
  return (
    <S.Container>
      {categories.map((category, index) => (
        <S.Tag key={index}>{category}</S.Tag>
      ))}
    </S.Container>
  );
};

export default ListTag;
