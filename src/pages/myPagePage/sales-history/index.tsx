import {
  ButtonPlus,
  Header,
  ListSalesCompleted,
  ListSalesHidden,
  ListSalesInprogress,
  Tab,
  TextLabel,
} from 'components/index';
import arrow from 'assets/icons/arrow.svg';
import * as S from './style';
import { TabItemProps } from '../../../types/types';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const SalesHistory = () => {
  const navigate = useNavigate();
  const tabData: TabItemProps[] = [
    {
      label: '판매중',
      ContentComponent: () => <ListSalesInprogress />,
    },
    {
      label: '판매 완료',
      ContentComponent: () => <ListSalesCompleted />,
    },
    {
      label: '숨김',
      ContentComponent: () => <ListSalesHidden />,
    },
  ];
  return (
    <>
      <Header>
        <TextLabel text="판매내역" size={16} $weight={700} />
        <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
      </Header>

      <S.Content>
        <Tab tabs={tabData} />
        <Link to={'/product/new'}>
          <ButtonPlus $bottom="20px" />
        </Link>
      </S.Content>
    </>
  );
};

export default SalesHistory;
