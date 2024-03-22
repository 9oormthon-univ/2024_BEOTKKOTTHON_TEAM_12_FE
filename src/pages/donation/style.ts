import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: -15px;
  height: calc(100svh - var(--nav-size) - var(--header-size));
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;

  // IE와 Edge를 위한 스크롤바 숨기기
  -ms-overflow-style: none;
  // Firefox를 위한 스크롤바 숨기기
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .ranking {
    margin-bottom: 14px;
  }
`;
export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 335px;
  padding: 20px 33px;
  gap: 5px;
  background-color: white;
`;
export const ImageWrapper = styled.div`
  padding: 0px 33px 20px 33px;
`;
