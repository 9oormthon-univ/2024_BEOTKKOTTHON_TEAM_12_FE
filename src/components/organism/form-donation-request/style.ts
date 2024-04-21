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

export const CheckboxWrapper = styled.div`
  color: var(--grey-7);

  .checkbox {
    display: flex;
    gap: 1.5px;
    margin-bottom: 9.5px;
    align-items: center;
    font-size: 14px;

    & > input {
      width: 17px;
      height: 17px;
    }
  }

  & + & {
    margin-top: 15px;
  }
`;

export const FlexInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 12px;
`;
