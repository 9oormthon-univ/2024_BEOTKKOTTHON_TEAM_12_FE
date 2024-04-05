import * as S from './style';
import logo from 'assets/logo/big-logo.svg';
import { TextLabel, LoginForm } from 'components/index';
import { useNavigate } from 'react-router-dom';
// import { instance } from 'apis';

const Login = () => {
  const navigate = useNavigate();

  const handleFindId = () => {
    console.log('아이디찾기');
  };

  const handleSignIn = () => {
    navigate('/signup');
  };

  const hadleNewPassword = () => {
    console.log('비밀번호 재설정');
  };

  return (
    <S.LoginWrapper>
      <img src={logo} alt="logo" />
      <LoginForm />
      <S.LinkWrapper>
        <S.Link onClick={handleFindId}>
          <TextLabel text={'아이디 찾기'} size={12} color="var(--grey-5)" />
        </S.Link>
        <S.Divider>|</S.Divider>
        <S.Link onClick={hadleNewPassword}>
          {' '}
          <TextLabel text={'비밀번호 재설정'} size={12} color="var(--grey-5)" />
        </S.Link>
        <S.Divider>|</S.Divider>
        <S.Link onClick={handleSignIn}>
          {' '}
          <TextLabel text={'회원가입'} size={12} color="var(--grey-5)" />
        </S.Link>
      </S.LinkWrapper>

      <S.LoginMessage>
        <TextLabel
          text={
            '로그인하면 웨어 이용약관에 동의하는 것으로 간주합니다. \n웨어의 회원 정보 처리 방식은 개인정보 처리방침 및 쿠키 정책에서 확인해보세요.'
          }
          size={9}
          $weight={300}
          color="var(--grey-4)"
          $textAlign="center"
        />
      </S.LoginMessage>
    </S.LoginWrapper>
  );
};

export default Login;
