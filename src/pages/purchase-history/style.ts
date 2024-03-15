import styled from 'styled-components';

export const BackIcon = styled.img`
  padding: 10px;
  margin-left: 10px;
  transform: rotate(180deg); /* 왼쪽 화살표*/
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
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
