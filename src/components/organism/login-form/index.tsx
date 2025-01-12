import React, { useState } from 'react';
import * as S from './style';
import { Checkbox, PasswordInput, Button, BoxInput } from 'components/index';
import { useNavigate } from 'react-router-dom';
import { LoginFormData } from 'types/authType';
import { LOGIN_DATA } from 'constants/shared';
import { useLogin } from 'service/auth/useAuthService';

const LoginForm = () => {
  const navigate = useNavigate();
  const [autoLoginChecked, setAutoLoginChecked] = useState(false);
  const [saveIdChecked, setSaveIdChecked] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    id: LOGIN_DATA.user_created_id,
    password: LOGIN_DATA.user_password,
  });

  const { mutate: loginMutation } = useLogin();

  const handleLogin = () => {
    loginMutation(formData);
    navigate('/donation');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <S.LoginBox>
        <BoxInput
          name="id"
          type="text"
          placeholder="아이디"
          value={formData.id}
          onChange={handleInputChange}
        />
        <PasswordInput value={formData.password} handleInputChange={handleInputChange} />
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
        width="100%"
        handleOnClick={handleLogin}
        children="로그인"
        $padding="16px"
        $borderRadius="8px"
        fontSize="18px"
        disabled={!formData.id && !formData.password}
      />
    </>
  );
};

export default LoginForm;
