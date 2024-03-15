import * as S from './style';
import plus from '@assets/icons/add.svg';

interface ButtonPlusProps {
  handleClick: () => void;
}

const ButtonPlus = ({ handleClick }: ButtonPlusProps) => {
  return (
    <S.Container onClick={handleClick}>
      <img src={plus} alt="plus" />
    </S.Container>
  );
};

export default ButtonPlus;
