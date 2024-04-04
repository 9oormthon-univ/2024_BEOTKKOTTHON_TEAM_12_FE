import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 31px;
  padding-bottom: 45px;
`;

export const Level = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;

  .img-level-info {
    width: 190px;
    height: 63px;
    margin-top: 20px;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  gap: 7px;
  padding: 0 10px;

  .title {
    padding: 0 10px;
  }
`;
