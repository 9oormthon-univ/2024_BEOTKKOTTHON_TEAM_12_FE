import React from 'react';
import * as S from './style';
import TextLabel from '../text-label';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  color?: string;
  $fontSize?: number;
  $circleSize?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  setIsChecked,
  color,
  $fontSize,
  $circleSize,
}) => {
  const onChange = () => {
    setIsChecked(!checked);
  };

  return (
    <S.CheckboxContainer>
      <S.CustomCheckbox
        id={id}
        type="checkbox"
        $circleSize={$circleSize as string}
        checked={checked}
        onChange={onChange}
      />
      <S.CheckboxLabel htmlFor={id} color={color}>
        <TextLabel size={$fontSize as number} $weight={300} color={color}>
          {label}
        </TextLabel>
      </S.CheckboxLabel>
    </S.CheckboxContainer>
  );
};

export default Checkbox;
