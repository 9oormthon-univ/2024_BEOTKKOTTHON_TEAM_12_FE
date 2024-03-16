import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 22px;

  .name {
    margin-bottom: 5px;
    font-size: 21px;
    font-weight: bold;
    color: var(--grey-7);
  }

  .description {
    margin-bottom: 5px;
    padding: 10px 0;
    box-sizing: border-box;
    min-height: 76px;
    font-size: 15px;
    color: var(--grey-7);
  }

  .place {
    font-size: 12px;
    color: var(--grey-7);

    & > span {
      margin: 0 6px;
      padding: 3px 10px;
      border-radius: 10px;
      background-color: var(--grey-2);
      color: var(--grey-6);
    }
  }
`;

export const SubTitle = styled.div`
  display: flex;
  algin-items: center;
  height: 17px;
  margin-bottom: 13px;
  font-size: 12px;
  line-height: 17px;

  .state {
    margin-left: 2.5px;
    margin-right: 15px;
    color: var(--grey-6);
  }

  .time {
    color: var(--grey-5);
  }
`;
