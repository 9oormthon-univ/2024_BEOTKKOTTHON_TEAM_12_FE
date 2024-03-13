import styled from 'styled-components';
export {
  MenuWrapper,
  MenuSection,
  MenuItemList,
  MenuItem,
  ListLine,
  Divider,
  Link,
  FooterWrapper,
  MenuItemWrapper,
};
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  margin-top: 5px;
  background-color: #fff;
`;

const MenuSection = styled.div`
  margin-bottom: 24px;
  padding: 0 20px;
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
  width: 100%;
  margin-top: 15px;
  border-top: 1px solid var(--grey-2);
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Divider = styled.span`
  color: var(--grey-4);
  margin: 0 8px;
`;

const Link = styled.span`
  color: var(--grey-4);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
