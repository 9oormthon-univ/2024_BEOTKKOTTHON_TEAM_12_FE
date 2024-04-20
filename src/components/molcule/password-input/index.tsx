import React, { useState } from 'react';
import eyeOff from 'assets/icons/eye_off.svg';
import eye from 'assets/icons/eye.svg';
import { BoxInput } from 'components/index';

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
    <BoxInput
      name="password"
      type={showPassword ? 'text' : 'password'}
      placeholder="비밀번호"
      value={value}
      onChange={handleInputChange}
    >
      <img src={showPassword ? eyeOff : eye} alt="eye" onClick={togglePasswordVisibility} />
    </BoxInput>
  );
};

export default PasswordInput;
