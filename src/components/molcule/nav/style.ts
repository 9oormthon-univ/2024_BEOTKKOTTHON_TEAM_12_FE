import styled from 'styled-components';

interface TabNameProps {
  $active: boolean;
}

export const BoxNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: var(--nav-size);
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0 -3px 6.3px -2px var(--grey-4);
  border-top: 1px solid var(--grey-3);
  &.fixed {
    position: fixed;
    bottom: 0px;
  }
`;

export const BoxItem = styled.div`
  min-width: 38.2px;
  height: 51px;
  text-align: center;

  & > img {
    width: 24px;
  }
`;

export const TabName = styled.div<TabNameProps>`
  margin-top: 10px;
  font-size: 10px;
  color: ${(props) => (props.$active ? 'var(--grey-7)' : 'var(--grey-4)')};
`;
export const TabIcon = styled.img`
  pointer-events: none; /* 포인터 이벤트 무시 */
`;
