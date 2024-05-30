import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  .title {
    color: var(--grey-7);
    font-size: 16px;
  }

  .time {
    color: var(--grey-5);
    font-size: 12px;
    font-weigth: 300;
  }
`;

export const ListBox = styled.div`
  display: flex;
  gap: 13px;
  margin-bottom: 11px;
  padding: 10px 14px;
  background-color: var(--grey-1);
  border-radius: 10px;

  .number {
    color: var(--green-6);
  }

  .name {
    color: var(--grey-7);
  }
`;
