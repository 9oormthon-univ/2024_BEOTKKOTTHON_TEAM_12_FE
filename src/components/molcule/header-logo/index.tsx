import * as S from './styled';
import logo from '@assets/logo/logo.svg';
import notifications from '@assets/icons/notifications.svg';

const HeaderLogo = () => {
  return (
    <S.Container>
      <img src={logo} alt="logo" />
      <img className="notifications" src={notifications} alt="notifications" />
    </S.Container>
  );
};

export default HeaderLogo;
