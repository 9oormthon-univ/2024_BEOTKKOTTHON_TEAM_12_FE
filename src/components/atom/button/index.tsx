import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  width?: string;
  color?: string;
  backgroundColor?: string;
}

const ButtonContainer = styled.button<ButtonProps>`
  width: ${({ width }) => width || '100px'};
  padding: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor || 'var(--grey-2)'};
  color: ${({ color }) => color || 'var(--grey-5)'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ text, width, color, backgroundColor }) => {
  return (
    <ButtonContainer width={width} color={color} backgroundColor={backgroundColor}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
