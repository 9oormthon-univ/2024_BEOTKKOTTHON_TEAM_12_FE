import * as S from './styled';
import logo from '@assets/logo/logo.svg';
import notifications from '@assets/icons/notifications.svg';
import { BoxHeader } from '@components/index';

const HeaderLogo = () => {
  return (
    <BoxHeader>
      <S.BoxIcon />

      <img src={logo} alt="logo" />

      <S.BoxIcon>
        <img src={notifications} alt="notifications" />
      </S.BoxIcon>
    </BoxHeader>
  );
};

export default HeaderLogo;
