import { BoxInput } from '@components/index';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 41px;

  .num {
    margin-bottom: 15px;
  }

  .box-num {
    .btn {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: var(--grey-3);
      font-size: 30px;
      line-height: 30px;
      color: white;
    }

    & input {
      text-align: center;
    }
  }
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

export const InputNum = styled(BoxInput)`
  width: 164px;
  align-items: center;
  margin-top: 10px;

  & > input {
    width: 100%;
    text-align: center;
    padding-right: 4px;
  }

  & > p {
    color: var(--grey-5);
  }
`;

export const Sort = styled.label`
  font-size: 14px;
  color: var(--grey-7);
`;
