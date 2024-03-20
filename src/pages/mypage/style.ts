import styled from 'styled-components';

export const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100svh - var(--nav-size));
  background-color: var(--grey-2);
  overflow-y: scroll;
  // IE와 Edge를 위한 스크롤바 숨기기
  -ms-overflow-style: none;
  // Firefox를 위한 스크롤바 숨기기
  scrollbar-width: none;

  &::-webkit-scrollbar {
    // Chrome, Safari, Opera를 위한 스크롤바 숨기기
    display: none;
  }
`;
