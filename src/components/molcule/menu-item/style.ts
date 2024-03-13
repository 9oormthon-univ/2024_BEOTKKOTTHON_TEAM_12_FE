import styled from 'styled-components';
export { MenuWrapper, MenuSection, MenuItemList, MenuItem, ListLine };
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%-20px;
  padding: 20px 0 0 20px;
  margin-top: 1px;
  background-color: #fff;
`;

const MenuSection = styled.div`
  margin-bottom: 24px;
  cursor: pointer;
`;

const MenuItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const MenuItem = styled.li`
  padding: 8px 0;
`;

const ListLine = styled.div`
  width: 90%;
  margin-top: 15px;
  border-top: 1px solid var(--grey-2);
`;
