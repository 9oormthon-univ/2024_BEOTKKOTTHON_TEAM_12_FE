import styled from 'styled-components';

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxUniv = styled.div`
  display: flex;

  & > img {
    width: 25px;
    height: 25px;
  }

  .name {
    width: 90px;
    font-size: 12px;
    font-weight: bold;
    color: var(--grey-7);
  }
`;

export const Bar = styled.div<{ $width: number }>`
  width: ${({ $width }) => $width};
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
