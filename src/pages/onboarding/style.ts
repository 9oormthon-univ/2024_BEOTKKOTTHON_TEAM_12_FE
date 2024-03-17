import styled from 'styled-components';

export const Container = styled.div`
  .carousel {
    width: 100%;
    margin-top: 60px;
  }
`;

export const BoxImage = styled.div`
  width: 100%;
  height: 160px;
`;

export const Circle = styled.div`
  display: grid;
  place-items: center;
  width: 33px;
  height: 33px;
  border-radius: 100%;
  margin-bottom: 18px;
  box-sizing: border-box;
  background-color: var(--green-1);
  font-size: 17px;
  font-weight: bold;
  color: var(--green-6);
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 19px;
    font-weight: bold;
    color: var(--green-7);
    margin-bottom: 40px;
  }

  .description {
    height: 30px;
    font-szie: 16px;
    color: var(--grey-7);
  }
`;
