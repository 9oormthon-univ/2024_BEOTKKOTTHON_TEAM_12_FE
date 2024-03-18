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

export const Content = styled.div`
  height: calc(100vh - var(--header-size));
  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  padding: 20px;
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 0;
  margin-bottom: -10px;
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
