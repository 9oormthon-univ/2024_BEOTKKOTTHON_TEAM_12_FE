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
          <TextLabel size={12} color="var(--grey-5)">
            아이디 찾기
          </TextLabel>
        </S.Link>
        <S.Divider>|</S.Divider>
        <S.Link onClick={hadleNewPassword}>
          {' '}
          <TextLabel size={12} color="var(--grey-5)">
            비밀번호 재설정
          </TextLabel>
        </S.Link>
        <S.Divider>|</S.Divider>
        <S.Link onClick={handleSignIn}>
          {' '}
          <TextLabel size={12} color="var(--grey-5)">
            회원가입
          </TextLabel>
        </S.Link>
      </S.LinkWrapper>

      <S.LoginMessage>
        <TextLabel size={9} $weight={300} color="var(--grey-4)" $textAlign="center">
          <p>로그인하면 웨어 이용약관에 동의하는 것으로 간주합니다.</p>
          <p>
            웨어의 회원 정보 처리 방식은 <span>개인정보 처리방침</span> 및 <span>쿠키 정책</span>
            에서 확인해보세요.
          </p>
        </TextLabel>
      </S.LoginMessage>
    </S.LoginWrapper>
  );
};

export default Login;
