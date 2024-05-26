import styled from 'styled-components';

interface ContainerProps {
  $marginBottom?: string;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 160px;
  margin-bottom: ${(props) => props.$marginBottom || '15px'};
  cursor: pointer;

  & > svg {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    opacity: 80%;
  }
`;

export const BoxImage = styled.img`
  width: 100%;
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

  & > svg {
    flex-shrink: 0;
  }

  .state {
    font-size: 10px;
    color: var(--grey-6);
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
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
