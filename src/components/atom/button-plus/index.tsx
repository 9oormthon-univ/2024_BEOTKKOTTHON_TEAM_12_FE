import * as S from './style';
import plus from '@assets/icons/add.svg';

const ButtonPlus = () => {
  return (
    <S.Container>
      <img src={plus} alt="plus" />
    </S.Container>
  );
};

export default ButtonPlus;
