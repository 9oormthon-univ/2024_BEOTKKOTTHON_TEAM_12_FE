import styled from 'styled-components';

export const Content = styled.div`
  height: var(--content-size);
  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const BtnAnswer = styled.div`
  display: grid;
  place-items: center;
  height: var(--nav-size);
  padding: 0 20px;
`;
