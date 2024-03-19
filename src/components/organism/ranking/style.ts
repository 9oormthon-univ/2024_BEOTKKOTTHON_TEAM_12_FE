import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;

  .title {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 16px;
    font-weight: bold;
  }

  .time {
    font-size: 12px;
    font-weight: 300;
    color: var(--grey-5);
  }
`;

export const Graph = styled.div`
  width: 100%;
  margin-top: 26px;
`;

export const Text = styled.div`
  margin-top: 24px;
  margin-bottom: 31px;
  font-size: 13px;
  color: var(--grey-7);
  line-height: 20px;
  text-align: center;

  & span {
    font-weight: bold;
    color: black;
  }
`;
