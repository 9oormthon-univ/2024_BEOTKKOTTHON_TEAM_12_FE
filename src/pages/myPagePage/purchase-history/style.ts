import styled from 'styled-components';

export const Content = styled.div`
  padding: 0 20px;
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
  padding-top: 10px;
  margin-bottom: 10px;
`;
