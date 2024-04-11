import { ButtonBack, ButtonPlus, Header, Tab, TextLabel } from 'components/index';
import * as S from './style';
import { Link } from 'react-router-dom';

const SalesHistory = () => {
  return (
    <>
      <Header>
        <TextLabel size={18} $weight={700}>
          판매내역
        </TextLabel>
        <ButtonBack className="left" />
      </Header>

      <S.Content>
        <Tab />
        <Link to={'/product/new'}>
          <ButtonPlus $bottom="20px" />
        </Link>
      </S.Content>
    </>
  );
};

export default SalesHistory;
