import { useEffect, useState } from 'react';
import * as S from './style';
import { BoxError, ListSalesInprogress, ListTradeItems, Loading } from 'components';
import { useInView } from 'react-intersection-observer';
import { useSalesHistoryQueries } from 'queries/user/useSalesHistoryQueries';

const Tab = () => {
  const tabs = ['판매 중', '판매 완료', '숨김'];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { isPending, isError, numberOfProducts, fetchNextPage, isFetchingNextPage } =
    useSalesHistoryQueries(tabs.indexOf(activeTab));
  const { ref, inView } = useInView({ threshold: 0, delay: 0 });

  useEffect(() => {
    if (inView && fetchNextPage) fetchNextPage();
  }, [inView]);

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
        {isFetchingNextPage ? (
          <Loading $width="100%" $height="50px" />
        ) : (
          <div ref={ref} style={{ height: '50px' }} />
        )}
      </S.TabPanel>
    </>
  );
};

export default Tab;
