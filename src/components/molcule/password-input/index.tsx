import React, { useState } from 'react';
import * as S from './style';
import eyeOff from 'assets/icons/eye-off.svg';

type PasswordInputProps = {
  value: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const PasswordInput: React.FC<PasswordInputProps> = ({ value, handleInputChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.PasswordInputWrapper>
      <S.LoginInput
        name="password"
        type={showPassword ? 'text' : 'password'}
        placeholder="비밀번호"
        value={value}
        onChange={handleInputChange}
      />
      <S.EyeIcon src={eyeOff} alt="eye" onClick={togglePasswordVisibility} />
    </S.PasswordInputWrapper>
  );
};

export default PasswordInput;
