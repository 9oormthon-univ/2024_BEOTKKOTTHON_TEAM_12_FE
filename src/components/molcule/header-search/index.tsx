import { Search } from '@components/index';
import * as S from './style';

interface HeaderSearchProps {
  setFocus: (value: boolean) => void;
}

const HeaderSearch = ({ setFocus }: HeaderSearchProps) => {
  return (
    <S.Container>
      <Search setFocus={setFocus} />
      <p className="cancle">취소</p>
    </S.Container>
  );
};

export default HeaderSearch;
