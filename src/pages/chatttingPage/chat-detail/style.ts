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

export const ChatScreenFixed = styled.div`
  position: fixed;
  top: 60px;
  width: 400px;
`;

export const FooterFixed = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 370px;
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

export const Footer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--nav-size);
  padding: 24px;
  box-sizing: border-box;
  border-top: 1px solid var(--grey-3);
`;
