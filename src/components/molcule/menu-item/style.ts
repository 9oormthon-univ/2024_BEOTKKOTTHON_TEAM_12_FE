import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 33px 24px 0;
  margin-top: 5px;
  background-color: #fff;
`;

export const MenuItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  padding: 0;
  margin-top: 24px;
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Noto Sans KR';
  & > a {
    font-weight: 300;
    text-decoration: none;
    color: var(--grey-7);
  }
`;

export const ListLine = styled.div`
  width: 100%;
  margin: 25px 0;
  border-top: 1px solid var(--grey-2);
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 41px;
  padding: 17.5px;
  font-size: 14px;
  color: var(--grey-4);
`;

export const Link = styled.span`
  cursor: pointer;
  margin: 0 15px;

  &:hover {
    text-decoration: underline;
  }
`;
