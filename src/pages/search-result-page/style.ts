import { BoxHeader } from '@components/index';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;

  .header {
    margin-bottom: 20px;
  }

  .category {
    margin-bottom: 10px;
  }

  .filter {
    margin-bottom: 16px;
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
