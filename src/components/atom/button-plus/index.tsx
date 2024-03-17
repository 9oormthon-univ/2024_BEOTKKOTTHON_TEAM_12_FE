import * as S from './style';
import plus from '@assets/icons/add.svg';

interface ButtonPlusProps {
  $bottom: string;
  handleClick: () => void;
}

const ButtonPlus = ({ $bottom, handleClick }: ButtonPlusProps) => {
  return (
    <S.Container onClick={handleClick} $bottom={$bottom}>
      <img src={plus} alt="plus" />
    </S.Container>
  );
};

export default ButtonPlus;
