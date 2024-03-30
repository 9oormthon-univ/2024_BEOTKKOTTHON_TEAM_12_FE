import { useEffect, useState } from 'react';
import * as S from './style';
import logo from 'assets/logo/big-logo.svg';
import eyeOff from 'assets/icons/eye-off.svg';
import { Button, Checkbox, TextLabel } from 'components/index';
import { useNavigate } from 'react-router-dom';
// import { instance } from 'apis';

interface FormData {
  userId: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const handleFindId = () => {
    console.log('아이디찾기');
  };

  const handleSignIn = () => {
    navigate('/signup');
  };

  const handleLogin = async () => {
    console.log('로그인');
    console.log(formData);
    // const response = await instance.post('/login', {
    //   user_id: formData.userId,
    //   user_password: formData.password,
    // });
    navigate('/donation');

    // if (response.data.id) {
    //   // 로그인 성공 처리
    //   localStorage.setItem('userId', response.data.id);

    //   navigate('/donation');
    // } else {
    //   // 로그인 실패 처리
    //   alert('로그인 실패');
    //   navigate('/login');
    // }
  };

  const hadleNewPassword = () => {
    console.log('비밀번호 재설정');
  };

  const [formData, setFormData] = useState<FormData>({
    userId: '',
    password: '',
  });

  const [autoLoginChecked, setAutoLoginChecked] = useState(false);
  const [saveIdChecked, setSaveIdChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [buttonColor, setButtonColor] = useState({
    $backgroundColor: 'var(--grey-2)',
    color: 'var(--grey-5)',
  });

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      userId: event.target.value,
    });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      password: event.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (formData.userId && formData.password) {
      setButtonColor({
        $backgroundColor: 'var(--green-primary)',
        color: '#ffffff',
      });
    } else {
      setButtonColor({
        $backgroundColor: 'var(--grey-2)',
        color: 'var(--grey-5)',
      });
    }
  }, [formData]);

  return (
    <S.LoginWrapper>
      <img src={logo} alt="logo" />
      <S.LoginBox>
        <S.LoginInput
          type="text"
          placeholder="아이디"
          value={'test123'}
          onChange={handleIdChange}
        />
        <S.PasswordInputWrapper>
          <S.LoginInput
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호"
            value={'testtest123'}
            onChange={handlePasswordChange}
          />
          <S.EyeIcon src={eyeOff} alt="eye" onClick={togglePasswordVisibility} />
        </S.PasswordInputWrapper>
      </S.LoginBox>

      <S.CheckboxWrapper>
        <Checkbox
          id={'autoLogin'}
          label="자동 로그인"
          checked={autoLoginChecked}
          setIsChecked={setAutoLoginChecked}
        />
        <Checkbox
          id={'saveId'}
          label="아이디 저장"
          checked={saveIdChecked}
          setIsChecked={setSaveIdChecked}
        />
      </S.CheckboxWrapper>

      <Button
        handleOnClick={handleLogin}
        children="로그인"
        width="335px"
        $padding="16px"
        fontSize="18px"
        $bgcolor={buttonColor.$backgroundColor}
        color={buttonColor.color}
        disabled={!formData.userId || !formData.password}
      />

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
