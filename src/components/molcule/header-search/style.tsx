import { BoxHeader } from '@components/index';
import styled from 'styled-components';

export const Container = styled(BoxHeader)`
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
