import * as S from './style';
import { FaPlus } from 'react-icons/fa';

interface ButtonPlusProps {
  $bottom: string;
}

const ButtonPlus = ({ $bottom }: ButtonPlusProps) => {
  return (
    <S.Container $bottom={$bottom}>
      <FaPlus />
    </S.Container>
  );
};

export default ButtonPlus;
