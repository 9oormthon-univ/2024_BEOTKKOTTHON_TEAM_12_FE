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

export const Product = styled.div`
  height: 74px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--grey-3);

  & > img {
    width: 50px;
    height: 50px;
  }

  .name {
    font-size: 14px;
    margin-bottom: 7px;
  }

  .price {
    font-size: 15px;
    font-weight: bold;
    color: var(--grey-7);
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 10px;
  height: calc(var(--content-size) - 74px);

  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
