import * as S from "./style";
import plus from "assets/icons/add.svg";

interface ButtonPlusProps {
  $bottom: string;
}

const ButtonPlus = ({ $bottom }: ButtonPlusProps) => {
  return (
    <S.Container $bottom={$bottom}>
      <img src={plus} alt="plus" />
    </S.Container>
  );
};

export default ButtonPlus;
