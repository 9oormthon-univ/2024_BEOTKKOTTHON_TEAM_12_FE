import styled from 'styled-components';

export const BoxText = styled.div`
  margin: 41px 0px;

  .main-title {
    font-size: 16px;
    font-weight: bold;
    color: var(--green-6);
  }

  .notice-list {
    margin-left: 20px;
    font-size: 12px;
    font-weight: 300;
    color: #666666;
    line-height: 25px;
    list-style: disc;

    & > li {
      margin-bottom: 10px;
    }

    li::marker {
      color: #666666;
    }
  }
`;
