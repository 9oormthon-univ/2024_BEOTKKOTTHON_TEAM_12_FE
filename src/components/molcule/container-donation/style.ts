import styled from 'styled-components';

export const Container = styled.div`
  height: calc(var(--content-size));
  padding: 0 20px;
  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .dot {
    margin-top: 20px;
  }

  .title {
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 24px;
  }
`;

export const BtnNext = styled.div`
  display: grid;
  place-items: center;
  height: var(--nav-size);
  padding: 0 20px;
`;
