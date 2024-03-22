import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 33px 30px 33px;
  background-color: white;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  font-family: 'Noto Sans KR' !important;

  .title {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 16px;
    font-weight: bold;
    & > img {
      width: 14px;
      height: 14px;
      margin-bottom: 2px;
    }
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
