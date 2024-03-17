import styled from 'styled-components';
export const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;

  position: relative;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const ImagePreview = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

export const AddButton = styled.label`
  margin-right: 12px;
  background: none;
  color: var(--green-primary);
  cursor: pointer;
  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.9);
  }

  position: relative;
  input[type='file'] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px 15px;
  background-color: var(--grey-1);
  border: none;
  border-radius: 22px;
  font-size: 16px;
  caret-color: var(--green-primary);
  &:focus {
    outline: none;
  }
  ::placeholder {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const SendButton = styled.button`
  display: flex;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 10px;
  margin-left: 12px;
  background: var(--green-primary);
  border: none;
  border-radius: 50%;
  cursor: pointer;

  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.95);
  }
`;
