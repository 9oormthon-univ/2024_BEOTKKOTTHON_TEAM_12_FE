import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, auto));
  grid-template-rows: repeat(auto-fill, minmax(233px, auto));
  justify-items: center;
  align-items: center;
  gap: 8px;
`;

export const SaleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  gap: 5px;
  margin-bottom: 20px;
`;
