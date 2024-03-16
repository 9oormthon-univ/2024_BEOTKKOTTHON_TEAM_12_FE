import styled from 'styled-components';

export const BackIcon = styled.img`
  transform: translateX(11px) rotate(180deg);
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const SaleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  gap: 5px;
  margin-bottom: 20px;
`;

export const NoItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  font-size: 16px;
  color: var(--grey-5);
`;

export const Content = styled.div`
  height: calc(100vh - var(--header-size));
  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
