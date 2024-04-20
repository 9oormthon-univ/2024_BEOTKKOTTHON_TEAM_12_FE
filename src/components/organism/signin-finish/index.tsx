import TextLabel from 'components/atom/text-label';
import welcomeLogo from 'assets/logo/welcome-logo.svg';
import * as S from './style';
import { Button } from 'components';
import { useNavigate } from 'react-router-dom';
import { useSigninFormDataActions } from 'store/signInData';

const SigninFinish = () => {
  const navigate = useNavigate();
  const { resetSigninFormData } = useSigninFormDataActions();

  return (
    <>
      <S.Container>
        <img src={welcomeLogo} alt="회원가입 완료" />
        <TextLabel color="var(--green-primary)" size={15} $weight={500} $textAlign="center">
          회원가입이 완료되었습니다
        </TextLabel>
      </S.Container>

      <S.ButtonContainer>
        <Button
          width="100%"
          color="white"
          $bgcolor={'var(--green-6)'}
          // $bgcolor={isDisabled ? 'var(--grey-3)' : 'var(--green-6)'}
          $borderRadius="8px"
          fontSize="16px"
          $fontWeight="bold"
          $padding="16px"
          handleOnClick={() => {
            navigate('/login');
            resetSigninFormData();
          }}
        >
          로그인 하러 가기
        </Button>
      </S.ButtonContainer>
    </>
  );
};

export default SigninFinish;
