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
  gap: 10px;
  height: var(--content-size);

  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
