import { useEffect, useState } from 'react';
import * as S from './style';
import logo from '@assets/logo/big-logo.svg';
import eyeOff from '@assets/icons/eye-off.svg';
import { Button, Checkbox } from '@components/index';

interface FormData {
  userId: string;
  password: string;
}

const Login = () => {
  const handleFindId = () => {
    console.log('아이디찾기');
  };

  const handleWithdrawal = () => {
    console.log('회원탈퇴');
  };

  const handleLogin = () => {
    console.log('로그인');
  };

  const [formData, setFormData] = useState<FormData>({
    userId: '',
    password: '',
  });

  const [autoLoginChecked, setAutoLoginChecked] = useState(false);
  const [saveIdChecked, setSaveIdChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [buttonColor, setButtonColor] = useState({
    backgroundColor: 'var(--grey-2)',
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
      setButtonColor({ backgroundColor: 'var(--green-primary)', color: '#ffffff' });
    } else {
      setButtonColor({ backgroundColor: 'var(--grey-2)', color: 'var(--grey-5)' });
    }
  }, [formData]);

  return (
    <S.LoginWrapper>
      <img src={logo} alt="logo" />
      <S.LoginBox>
        <S.LoginInput
          type="text"
          placeholder="아이디"
          value={formData.userId}
          onChange={handleIdChange}
        />
        <S.PasswordInputWrapper>
          <S.LoginInput
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호"
            value={formData.password}
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
        padding="16px"
        fontSize="18px"
        $bgcolor={buttonColor.backgroundColor}
        color={buttonColor.color}
      />

      <S.LinkWrapper>
        <S.Link onClick={handleFindId}>아이디 찾기</S.Link>
        <S.Divider>|</S.Divider>
        <S.Link onClick={handleWithdrawal}>비밀번호 재설정</S.Link>
        <S.Divider>|</S.Divider>
        <S.Link onClick={handleWithdrawal}>회원가입</S.Link>
      </S.LinkWrapper>
    </S.LoginWrapper>
  );
};

export default Login;
