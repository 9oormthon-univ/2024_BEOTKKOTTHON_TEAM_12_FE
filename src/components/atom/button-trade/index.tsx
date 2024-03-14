import styled from 'styled-components';

interface ButtonProps {
  color?: string;
}

const Button = styled.button<ButtonProps>`
  height: 56px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => (props.color === 'primary' ? 'var(--green-6)' : 'var(--grey-4)')};
  outline: none;
  color: white;
  width: 100%;
`;

export default Button;
