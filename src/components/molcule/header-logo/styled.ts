import { BoxHeader } from '@components/index';
import styled from 'styled-components';

export const Container = styled(BoxHeader)`
  position: relative;
  justify-content: center;

  .notifications {
    position: absolute;
    right: 4px;
  }
`;
