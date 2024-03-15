import React from 'react';
import styled from 'styled-components';

interface TextLabelProps {
  text: string;
  size: number;
  weight?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const TextLabelWrapper = styled.div<{ size: number; weight?: number; color?: string }>`
  color: ${({ color }) => color || 'var(--grey-7)'};
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => weight || 500};
`;

const TextLabel: React.FC<TextLabelProps> = ({ text, size, weight, color, className, onClick }) => {
  return (
    <TextLabelWrapper
      className={className}
      size={size}
      weight={weight}
      color={color}
      onClick={onClick}
    >
      {text}
    </TextLabelWrapper>
  );
};

export default TextLabel;
