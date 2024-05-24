import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 130px;
  background: white;
`;

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  & > p {
    font-size: 18px;
    font-weight: 700;
  }

  & > img {
    width: 16px;
    height: 16px;
  }
`;

export const ChatScreenFixed = styled.div`
  position: fixed;
  top: 60px;
  width: 400px;
`;

export const Content = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  height: var(--content-size);

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
`;
