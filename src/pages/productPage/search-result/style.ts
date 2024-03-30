import { BoxHeader } from 'components/index';
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100svh - var(--header-size) - 15px);
  padding: 20px 20px 0 20px;
  box-sizing: border-box;

  .category {
    margin-bottom: 10px;
  }

  .filter {
    margin-bottom: 16px;
  }

  .items {
    overflow-y: scroll;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const HeaderSearch = styled(BoxHeader)`
  margin-top: 15px;
  padding: 0 20px;
  gap: 6.5px;

  .search-input {
    flex-grow: 1;
  }

  & > img {
    cursor: pointer;
  }

  .cancle {
    width: 26px;
    font-size: 14px;
    color: var(--grey-6);
  }
`;
