import React, { useState } from 'react';
import * as S from './style';
import { useProductList } from 'store/productListData';
import { ListSalesCompleted, ListSalesHidden, ListSalesInprogress } from 'components';

const Tab = () => {
  const productList = useProductList();
  const tabs = ['판매중', '판매 완료', '숨김'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
      <S.TabsContainer>
        {tabs.map((tab) => (
          <S.TabItemButton key={tab} isActive={activeTab === tab} onClick={() => setActiveTab(tab)}>
            {tab} {productList.length}
          </S.TabItemButton>
        ))}
      </S.TabsContainer>

      <S.TabPanel>
        {activeTab === tabs[0] && <ListSalesInprogress />}
        {activeTab === tabs[1] && <ListSalesCompleted />}
        {activeTab === tabs[2] && <ListSalesHidden />}
      </S.TabPanel>
    </>
  );
};

export default Tab;
