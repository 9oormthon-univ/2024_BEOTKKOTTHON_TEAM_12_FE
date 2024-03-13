import React from 'react';
import styled from 'styled-components';

interface ProfileButtonProps {
  text: string;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
}

const ButtonWrapper = styled.button<ProfileButtonProps>`
  width: fit-content;
  padding: 3px 8px;
  border-radius: 20px;
  border: 1px solid ${({ borderColor }) => borderColor || 'var(--grey-3)'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'var(--grey-1)'};
  color: ${({ color }) => color || 'var(--grey-7)'};
`;

const ProfileButton: React.FC<ProfileButtonProps> = ({
  text,
  color,
  borderColor,
  backgroundColor,
}) => {
  return (
    <ButtonWrapper backgroundcolor={backgroundColor} color={color} bordercolor={borderColor}>
      {text}
    </ButtonWrapper>
  );
};

export default ProfileButton;
