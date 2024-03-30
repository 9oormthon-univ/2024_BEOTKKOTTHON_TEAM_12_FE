import styled from 'styled-components';

export const BoxText = styled.div`
  margin: 41px 0px;
  word-break: keep-all;
  .main-title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    color: var(--green-6);
  }

  .notice-list {
    margin-left: 20px;
    font-size: 12px;
    font-weight: 300;
    color: #666666;
    line-height: 25px;
    list-style: disc;
    word-break: keep-all;

    & > li {
      margin-bottom: 10px;
    }

    li::marker {
      color: #666666;
    }
  }
`;

export const MainText = styled.div`
  background-color: var(--grey-2);
  padding: 16px 20px;

  .description {
    color: var(--grey-7);
    font-size: 12px;
    line-height: 24px;
  }

  .title {
    width: fit-content;
    font-size: 15px;
    font-weight: bold;
    line-height: 20px;
    background-color: var(--green-6);
    color: white;
    margin-bottom: 10px;
  }
`;
