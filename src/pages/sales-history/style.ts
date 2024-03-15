import styled from 'styled-components';

export const BackIcon = styled.img`
  padding: 10px;
  margin-left: 10px;
  transform: rotate(180deg); /* 왼쪽 화살표*/
`;

export const MarginContainer = styled.div`
  margin-top: 10px;
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
