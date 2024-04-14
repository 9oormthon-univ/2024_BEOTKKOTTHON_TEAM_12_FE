import styled from 'styled-components';

export const FormContainer = styled.form`
  height: calc(100vh - var(--header-size));
  box-sizing: border-box;
  padding: 11px 20px 20px;

  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 112px;
  padding: 10px 17px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--grey-3);
  outline: none;
  font-size: 16px;
  line-height: 1.4em;
  resize: none;

  &::placeholder {
    color: var(--grey-4);
  }
`;

export const LabelPlace = styled.p`
  margin-top: 12px;
  font-size: 14px;
  color: var(--grey-6);
`;
