import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 125px);
  padding: 20px;

  .items {
    overflow-y: scroll;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
