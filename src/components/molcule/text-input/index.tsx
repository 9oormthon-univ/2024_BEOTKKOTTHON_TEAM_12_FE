import React from 'react';
import * as S from './style';
import { TextLabel } from '@components/index';

interface TextInputProps {
  label: string;
  labelSize: number;
  value: string;
  placeholder?: string;
  readonly?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  labelSize,
  placeholder,
  value,
  readonly = false,
}) => {
  return (
    <>
      <S.InputContainer>
        <TextLabel text={label} size={labelSize} />
        <S.StyledBoxInput readOnly={readonly}>
          <input name="title" readOnly={readonly} placeholder={placeholder} defaultValue={value} />
        </S.StyledBoxInput>
      </S.InputContainer>
    </>
  );
};

export default TextInput;
