import styled from 'styled-components';
import checkIcon from '@assets/icons/check-icon.svg';

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label<{
  color?: string;
}>`
  margin-left: 8px;
  font-size: 12px;
  color: ${({ color }) => color || 'var(--grey-7)'};
  user-select: none;
  font-family: 'Noto Sans KR';
`;

export const CustomCheckbox = styled.input`
  position: relative;
  display: flex;
  align-items: center;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid var(--grey-4);
  cursor: pointer;

  transition: background 300ms;

  &:checked {
    background-color: var(--green-primary);
    border: none;
  }

  &::before {
    content: '';
    color: transparent;
    display: block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: transparent;
    background-size: contain;
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: 55%;
    left: 50%;
    width: 15px;
    height: 15px;

    background-image: url(${checkIcon});
    background-size: contain;
    background-repeat: no-repeat;
    transform: translate(-50%, -50%);
  }
`;
