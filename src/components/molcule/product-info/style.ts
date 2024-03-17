// style.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 20px;
  border-bottom: 1px solid var(--grey-3);
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  width: 51px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  overflow: hidden;
  border-radius: 8px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h3`
  font-size: 14px;
  margin: 0 0 7px 0; // 마진 설정
`;

export const ProductPrice = styled.div`
  font-size: 15px;
  font-weight: 700;
`;
