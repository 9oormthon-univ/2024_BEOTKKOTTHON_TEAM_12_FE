import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 130px;
  background: white;
`;

export const ChatFixedHeader = styled.div`
  position: fixed;
  top: 0;
  width: 400px;
  background-color: #ffffff;
  z-index: 100;
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
  height: calc(100svh - 55px - 86px - 75px);
`;

export const SectionScroll = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
