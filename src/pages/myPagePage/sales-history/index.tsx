import { ButtonBack, ButtonPlus, Header, Tab, TextLabel } from 'components/index';
import * as S from './style';
import { Link } from 'react-router-dom';

const SalesHistory = () => {
  return (
    <>
      <Header>
        <TextLabel text="판매내역" size={16} $weight={700} />
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
