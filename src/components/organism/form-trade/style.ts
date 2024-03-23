import { BoxInput } from "components/index";
import styled from "styled-components";

export const TextArea = styled.textarea`
  width: 100%;
  height: 112px;
  padding: 10px 17px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--grey-3);
  outline: none;
  font-size: 14px;
  line-height: 1.4em;

  &::placeholder {
    color: var(--grey-4);
  }
`;

export const InputNum = styled(BoxInput)`
  width: 164px;
  align-items: center;

  & > input {
    width: 100%;
    padding-right: 4px;
  }

  & > p {
    color: var(--grey-5);
  }
`;

export const LabelPlace = styled.p`
  margin-top: 12px;
  font-size: 14px;
  color: var(--grey-6);
`;
