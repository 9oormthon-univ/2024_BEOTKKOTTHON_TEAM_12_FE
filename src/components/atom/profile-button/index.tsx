import React from 'react';
import styled from 'styled-components';

interface ProfileButtonProps {
  color?: string;
  $borderColor?: string;
  $bgcolor?: string;
  children?: React.ReactNode;
}

const ButtonWrapper = styled.button<ProfileButtonProps>`
  width: fit-content;
  padding: 3px 8px;
  border-radius: 20px;
  border: 1px solid ${({ $borderColor }) => $borderColor || 'var(--grey-3)'};
  background-color: ${({ $bgcolor }) => $bgcolor || 'var(--grey-1)'};
  color: ${({ color }) => color || 'var(--grey-7)'};
`;

const ProfileButton: React.FC<ProfileButtonProps> = ({
  children,
  color,
  $borderColor,
  $bgcolor,
}) => {
  return (
    <ButtonWrapper $bgcolor={$bgcolor} color={color} $borderColor={$borderColor}>
      {children}
    </ButtonWrapper>
  );
};

export default ProfileButton;
