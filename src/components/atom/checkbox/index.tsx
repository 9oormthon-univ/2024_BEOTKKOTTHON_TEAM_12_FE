import React from 'react';
import * as S from './style';
import TextLabel from '../text-label';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  color?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, setIsChecked, color }) => {
  const onChange = () => {
    setIsChecked(!checked);
  };

  return (
    <S.CheckboxContainer>
      <S.CustomCheckbox id={id} type="checkbox" checked={checked} onChange={onChange} />
      <S.CheckboxLabel htmlFor={id} color={color}>
        <TextLabel text={label} size={14} $weight={300} color={color} />
      </S.CheckboxLabel>
    </S.CheckboxContainer>
  );
};

export default Checkbox;
