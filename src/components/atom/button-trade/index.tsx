import styled from 'styled-components';

interface ButtonProps {
  color?: string;
}

const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => (props.color === 'primary' ? 'var(--green-6)' : 'var(--grey-4)')};
  outline: none;
  font-size: 15px;
  color: white;
`;

export default Button;
