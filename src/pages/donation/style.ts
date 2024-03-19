import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(var(--header-size) + var(--content-size));
  padding: 0 20px;

  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
