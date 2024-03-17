import styled from 'styled-components';

export const Content = styled.div`
  & > img {
    width: 100%;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
`;
