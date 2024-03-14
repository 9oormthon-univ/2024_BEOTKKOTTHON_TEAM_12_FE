import * as S from './styled';
import logo from '@assets/logo/logo.svg';
import notifications from '@assets/icons/notifications.svg';

const HeaderLogo = () => {
  return (
    <S.Container>
      <S.BoxIcon />

      <img src={logo} alt="logo" />

      <S.BoxIcon>
        <img src={notifications} alt="notifications" />
      </S.BoxIcon>
    </S.Container>
  );
};

export default HeaderLogo;
