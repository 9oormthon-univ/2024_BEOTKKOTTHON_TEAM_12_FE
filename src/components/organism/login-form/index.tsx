import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Checkbox, PasswordInput, Button } from '../../index';
import { useNavigate } from 'react-router-dom';

interface FormData {
  userId: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const [autoLoginChecked, setAutoLoginChecked] = useState(false);
  const [saveIdChecked, setSaveIdChecked] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    userId: '',
    password: '',
  });

  const [buttonColor, setButtonColor] = useState({
    $backgroundColor: 'var(--grey-2)',
    color: 'var(--grey-5)',
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
    <>
      <S.LoginBox>
        <S.LoginInput
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
        handleOnClick={handleLogin}
        children="로그인"
        width="335px"
        $padding="16px"
        fontSize="18px"
        $bgcolor={buttonColor.$backgroundColor}
        color={buttonColor.color}
        disabled={!formData.userId || !formData.password}
      />
    </>
  );
};

export default LoginForm;
