import styled from 'styled-components';

export const Content = styled.div`
  height: calc(100vh - var(--header-size));
  box-sizing: border-box;
  padding: 11px 20px 20px;

  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
