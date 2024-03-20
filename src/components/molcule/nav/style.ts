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
  border-top: 1px solid var(--grey-3);
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

  @media screen and (min-width: 500px) {
    font-size: 13px;
  }

  @media screen and (max-width: 499px) {
    font-size: 10px;
  }
`;
export const TabIcon = styled.img`
  pointer-events: none; /* 포인터 이벤트 무시 */
`;
