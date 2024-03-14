import { Search } from '@components/index';
import * as S from './style';

const HeaderSearch = () => {
  return (
    <S.Container>
      <Search />
      <p className="cancle">취소</p>
    </S.Container>
  );
};

export default HeaderSearch;
