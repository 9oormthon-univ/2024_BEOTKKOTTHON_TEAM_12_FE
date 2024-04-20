import React from 'react';
import styled from 'styled-components';
interface ButtonProps {
  width?: string;
  color?: string;
  $padding?: string;
  $bgcolor?: string;
  $borderRadius?: string;
  fontSize?: string;
  $fontWeight?: string;
  $letterSpacing?: string;
  children?: React.ReactNode;
  handleOnClick?: () => void;
  disabled?: boolean;
}

const ButtonContainer = styled.button<ButtonProps>`
  width: ${({ width }) => width || '100px'};
  padding: ${({ $padding }) => $padding || '10px'};
  background-color: ${({ $bgcolor, disabled }) =>
    disabled != null
      ? disabled
        ? 'var(--grey-2)'
        : 'var(--green-6)'
      : $bgcolor || 'var(--grey-2)'};
  color: ${({ color, disabled }) =>
    disabled != null ? (disabled ? 'var(--grey-5)' : 'white') : color || 'var(--grey-5)'};
  border: none;
  border-radius: ${({ $borderRadius }) => $borderRadius || '5px'};
  cursor: pointer;
  transition: transform 0.1s ease;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: ${({ $fontWeight }) => $fontWeight || '500'};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing};

  &:active {
    transform: scale(0.95);
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  width,
  color,
  $bgcolor,
  handleOnClick,
  $letterSpacing,
  $borderRadius,
  fontSize,
  $fontWeight,
  $padding,
  disabled,
}) => {
  return (
    <ButtonContainer
      width={width}
      color={color}
      fontSize={fontSize}
      $fontWeight={$fontWeight}
      $bgcolor={$bgcolor}
      onClick={handleOnClick}
      $borderRadius={$borderRadius}
      $padding={$padding}
      disabled={disabled}
      $letterSpacing={$letterSpacing}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
