import { BoxHeader } from '@components/index';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;

  .header {
    margin-bottom: 20px;
  }

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
  gap: 10px;
  & > div {
    flex-grow: 1;
  }

  .cancle {
    width: 26px;
    font-size: 14px;
    color: var(--grey-6);
  }
`;
