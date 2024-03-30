import styled from 'styled-components';

export const BtnLeft = styled.img`
  transform: translateX(11px);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: var(--content-size);

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
