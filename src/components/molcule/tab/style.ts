import styled from 'styled-components';
export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  color: var(--grey-4);
`;

export const TabItemButton = styled.button<{ isActive: boolean }>`
  width: 33.333%;
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  border-bottom: 1.5px solid
    ${({ isActive }) => (isActive ? 'var(--green-primary)' : 'var(--grey-4)')};
  color: ${({ isActive }) => (isActive ? '#000000' : 'var(--gray-4)')};
  font-family: 'NanumSquareRound', 'Noto Sans KR', sans-serif;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const TabPanel = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  padding: 20px;
`;
