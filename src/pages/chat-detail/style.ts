import styled from 'styled-components';

export const Container = styled.div`
  background: white;
`;

export const BtnLeft = styled.img`
  margin-left: 10px;
  transform: rotate(180deg);
`;

export const NickNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
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
