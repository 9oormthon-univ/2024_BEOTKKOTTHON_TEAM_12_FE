import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 29px;
  padding-bottom: 49px;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const QnaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 10px 20px 0 20px;

  .title {
    margin-bottom: 10px;
  }

  .desc {
    margin-bottom: 5px;
  }
`;

export const Dot = styled.div`
  display: inline-block;
  width: 3px;
  height: 3px;
  margin-right: 3px;
  margin-bottom: 3px;
  background-color: var(--grey-7);
  border-radius: 50%;
`;
