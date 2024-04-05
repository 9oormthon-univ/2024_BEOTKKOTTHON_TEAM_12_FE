import styled from 'styled-components';

export const Conatiner = styled.table`
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;

  & td {
    height: 46px;
    border-bottom: 1px solid var(--grey-3);
    padding: 10px 0;
    box-sizing: border-box;
    vertical-align: middle;
  }

  .completed {
    color: var(--green-6);
  }
`;

export const THead = styled.thead`
  & th {
    width: 33.33%;
    padding: 10px 0;
    background: var(--grey-2);

    & > p {
      border-right: 1px solid var(--grey-4);
    }
  }
`;
