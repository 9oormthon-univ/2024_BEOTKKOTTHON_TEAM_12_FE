import { BoxHeader } from '@components/index';
import styled from 'styled-components';

const Header = styled(BoxHeader)`
  position: relative;
  justify-content: center;
  padding: 5px;

  .left {
    position: absolute;
    left: 4px;
  }

  .right {
    position: absolute;
    right: 4px;
  }
`;

export default Header;
