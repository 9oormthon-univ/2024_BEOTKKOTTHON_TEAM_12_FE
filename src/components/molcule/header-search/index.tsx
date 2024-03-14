import { Search } from '@components/index';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const HeaderSearch = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <Search />
      <p className="cancle" onClick={() => navigate('/')}>
        취소
      </p>
    </S.Container>
  );
};

export default HeaderSearch;
