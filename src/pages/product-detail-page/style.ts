import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 86px);

  .header {
    margin-bottom: 8px;
    padding: 0 24px;

    & .right {
      transform: translateX(17px);
    }
  }

  .profile {
    margin-bottom: 6px;
  }

  .product-image,
  .description {
    margin-bottom: 14px;
  }
`;

export const SectionScroll = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
