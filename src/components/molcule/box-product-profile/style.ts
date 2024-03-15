import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px;
`;

export const Profile = styled.div`
  margin-left: 10px;

  .name {
    display: flex;
    gap: 2px;
    margin-bottom: 3px;
    height: 23px;
    font-size: 16px;
    font-weight: bold;

    & > img {
      width: 16px;
      height: 16px;
    }
  }

  .time {
    font-size: 14px;
    color: var(--grey-4);
  }
`;
