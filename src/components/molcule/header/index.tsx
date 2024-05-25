import { BoxHeader } from 'components/index';
import styled from 'styled-components';

const Header = styled(BoxHeader)`
  position: relative;
  justify-content: center;
  height: var(--header-size);
  padding: 0 24px;
  padding-bottom: 10px;
  font-size: 18px;

  & > svg {
    width: 20px;
    height: 20px;
    color: var(--grey-5);
  }

  .left {
    position: absolute;
    left: 20px;
    cursor: pointer;
  }

  .right {
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
`;

export default Header;
