import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: var(--content-size);

  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .profile {
    margin-bottom: 6px;
  }

  .product-image,
  .description {
    margin-bottom: 14px;
  }
`;
