import { HeaderLogo, Search } from '@components/index';
import * as S from './style';

const MainPage = () => {
  return (
    <S.Container>
      <HeaderLogo />
      <Search />
    </S.Container>
  );
};

export default MainPage;
