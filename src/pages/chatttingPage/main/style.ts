import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: var(--content-size);
  padding: 5px 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
