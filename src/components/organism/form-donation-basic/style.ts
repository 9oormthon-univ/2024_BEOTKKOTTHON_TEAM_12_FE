import styled from 'styled-components';

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Label = styled.label`
  display: block;
  height: 24px;
  margin-bottom: 10px;
  font-size: 16px;
  color: var(--grey-7);
`;

export const FlexInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 12px;

  .flex-input {
    width: 100%;
  }

  .grow {
    flex-grow: 1;
  }

  & span {
    font-size: 16px;
    color: var(--grey-5);
  }
`;
