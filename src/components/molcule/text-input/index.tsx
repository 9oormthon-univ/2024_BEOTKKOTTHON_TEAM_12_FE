import React from "react";
import * as S from "./style";
import { TextLabel } from "components/index";
interface TextInputProps {
  label: string;
  labelSize: number;
  value: string;
  placeholder?: string;
  readonly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  labelSize,
  placeholder,
  value,
  readonly = false,
  onChange,
}) => {
  return (
    <>
      <S.InputContainer>
        <TextLabel text={label} size={labelSize} />
        <S.StyledBoxInput
          name="title"
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
