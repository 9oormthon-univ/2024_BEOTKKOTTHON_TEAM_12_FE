import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  width?: string;
  color?: string;
  backgroundColor?: string;
  handleOnClick?: () => void;
}

const ButtonContainer = styled.button<ButtonProps>`
  width: ${({ width }) => width || '100px'};
  padding: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor || 'var(--grey-2)'};
  color: ${({ color }) => color || 'var(--grey-5)'};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.95);
  }
`;

const Button: React.FC<ButtonProps> = ({ text, width, color, backgroundColor, handleOnClick }) => {
  return (
    <ButtonContainer
      width={width}
      color={color}
      backgroundColor={backgroundColor}
      onClick={handleOnClick}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;
