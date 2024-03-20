import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 28px;

  .question {
    margin: 10px 0 19px 0;
    padding: 15px 10px;
    border-radius: 10px;
    background-color: var(--grey-2);
    font-size: 12px;
    line-height: 17px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  .title {
    font-size: 18px;
    font-weight: bold;
    color: var(--green-7);
  }

  .point {
    font-size: 12px;
    font-weight: bold;
    color: var(--grey-5);
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  .number {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border: 1px solid var(--grey-3);
    border-radius: 100%;
    font-size: 12px;
    font-weight: bold;
    color: var(--grey-6);
  }

  .text {
    font-size: 14px;
    color: var(--grey-7);
  }

  .active {
    background-color: var(--green-6);
    color: white;
  }

  .check-box {
    width: 24px;
    height: 24px;

    & > img {
      width: 100%;
    }
  }
`;
