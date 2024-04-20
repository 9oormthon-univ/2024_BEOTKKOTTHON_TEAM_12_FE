import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Checkbox, PasswordInput, Button, BoxInput } from 'components/index';
import { useNavigate } from 'react-router-dom';
import { loginUserDummyData } from 'data/user';

interface FormData {
  userId: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const user = loginUserDummyData();
  const [autoLoginChecked, setAutoLoginChecked] = useState(false);
  const [saveIdChecked, setSaveIdChecked] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    // 로그인 기능 완성 시 복구 예정
    // userId: '',
    // password: '',
    userId: user.user_created_id,
    password: user.user_password,
  });

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(!formData.userId && !formData.password);

  return (
    <>
      <S.LoginBox>
        <BoxInput
          name="userId"
          type="text"
          placeholder="아이디"
          value={formData.userId}
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
        disabled={!formData.userId && !formData.password}
      />
    </>
  );
};

export default LoginForm;
