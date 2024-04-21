import TextLabel from 'components/atom/text-label';
import logo from 'assets/logo/big-logo.svg';
import * as S from './style';
import { Button } from 'components';

interface Props {
  english: string;
  main: string;
  sub?: string;
  btnText: string;
  onClick: () => void;
}

const FormCompletePage = ({ english, main, sub, btnText, onClick }: Props) => {
  return (
    <>
      <S.Container>
        <TextLabel color="var(--green-primary)" size={18} $weight={700} $textAlign="center">
          {english}
        </TextLabel>

        <img src={logo} className="logo-img" alt="logo" />

        <TextLabel
          className="main-text"
          color="var(--green-primary)"
          size={15}
          $weight={500}
          $textAlign="center"
        >
          {main}
        </TextLabel>
        {sub && (
          <TextLabel
            className="sub-text"
            $letterSpacing="-1.75px"
            color="var(--grey-5)"
            size={13}
            $weight={500}
            $textAlign="center"
          >
            {sub}
          </TextLabel>
        )}
      </S.Container>

      <S.ButtonContainer>
        <Button
          width="100%"
          color="white"
          $bgcolor="var(--green-6)"
          $borderRadius="8px"
          fontSize="16px"
          $fontWeight="bold"
          $padding="16px"
          handleOnClick={onClick}
        >
          {btnText}
        </Button>
      </S.ButtonContainer>
    </>
  );
};

export default FormCompletePage;
