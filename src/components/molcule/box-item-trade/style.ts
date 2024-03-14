import styled from 'styled-components';

export const Container = styled.div`
  width: 163.5px;
  height: 232px;
  margin-bottom: 25px;
`;

export const BoxImage = styled.div`
  box-shadow: inset 0 0 20px red;
  height: 163px;
  border-radius: 10px;
  margin-bottom: 6px;
`;

export const BoxDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  height: 17px;

  .name {
    font-size: 12px;
    font-weight: bold;
    color: var(--grey-7);
  }

  .time {
    font-size: 9px;
    color: var(--grey-5);
  }
`;

export const State = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  height: 14px;

  .state {
    font-size: 10px;
    color: var(--grey-6);
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  .price {
    font-size: 15px;
    font-weight: bold;
    color: var(--grey-7);
  }

  .sold {
    display: flex;
    align-items: center;
    height: 20px;
    padding: 3px 5px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: var(--grey-2);
    font-size: 10px;
    color: var(--grey-5);
  }
`;
