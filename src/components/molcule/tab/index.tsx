import { useState } from 'react';
import * as S from './style';
import { BoxError, ListSalesInprogress, ListTradeItems, Loading } from 'components';
import { useSalesHistoryQueries } from 'hooks/useSalesHistoryQueries';

const Tab = () => {
  const tabs = ['판매 중', '판매 완료', '숨김'];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { isPending, isError, numberOfProducts } = useSalesHistoryQueries(activeTab);

  if (isPending) return <Loading />;
  if (isError) return <BoxError>상품을 불러오는 중에 오류가 발생했습니다.</BoxError>;

  return (
    <>
      <S.TabsContainer>
        {tabs.map((tab, index) => (
          <S.TabItemButton
            key={tab}
            $isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab} {numberOfProducts[index]}
          </S.TabItemButton>
        ))}
      </S.TabsContainer>

      <S.TabPanel>
        {activeTab === tabs[0] ? <ListSalesInprogress /> : <ListTradeItems />}
      </S.TabPanel>
    </>
  );
};

export default Tab;
