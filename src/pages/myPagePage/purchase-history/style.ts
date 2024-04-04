import styled from 'styled-components';

export const Content = styled.div`
  height: calc(100vh - var(--header-size));
  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 0;
  margin-bottom: 10px;
`;
