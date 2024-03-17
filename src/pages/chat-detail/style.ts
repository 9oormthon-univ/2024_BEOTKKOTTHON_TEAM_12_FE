import styled from 'styled-components';

export const Container = styled.div`
  background: white;
`;

export const BtnLeft = styled.img`
  transform: translateX(11px);
  transform: rotate(180deg);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 55px - 86px - 75px);
`;

export const SectionScroll = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
