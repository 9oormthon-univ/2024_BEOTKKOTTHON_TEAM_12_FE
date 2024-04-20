import React from 'react';
import * as S from './style';
import { TextLabel } from 'components/index';
interface TextInputProps {
  label: string;
  name: string;
  labelSize: number;
  value: string;
  placeholder?: string;
  readonly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  labelSize,
  placeholder,
  value,
  readonly = false,
  onChange,
}) => {
  return (
    <>
      <S.InputContainer>
        <TextLabel size={labelSize}>{label}</TextLabel>
        <S.StyledBoxInput
          name={name}
          readOnly={readonly}
          placeholder={placeholder}
          defaultValue={value}
          onChange={onChange}
        ></S.StyledBoxInput>
      </S.InputContainer>
    </>
  );
};

export default TextInput;
