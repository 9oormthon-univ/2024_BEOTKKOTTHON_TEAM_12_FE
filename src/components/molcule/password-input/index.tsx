import React, { useState } from 'react';
import { BoxInput } from 'components/index';
import { HiOutlineEye } from 'react-icons/hi2';
import { HiOutlineEyeSlash } from 'react-icons/hi2';

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
      {showPassword ? (
        <HiOutlineEyeSlash size={24} color="var(--grey-4)" onClick={togglePasswordVisibility} />
      ) : (
        <HiOutlineEye size={24} color="var(--grey-4)" onClick={togglePasswordVisibility} />
      )}
    </BoxInput>
  );
};

export default PasswordInput;
