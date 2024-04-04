import React, { useState } from 'react';
import * as S from './style';
import { useProductList } from 'store/productListData';
interface TabItemProps {
  label: string;
  ContentComponent: React.ComponentType;
}

interface TabProps {
  tabs: TabItemProps[];
}

const Tab: React.FC<TabProps> = ({ tabs }) => {
  const productList = useProductList();
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <>
      <S.TabsContainer>
        {tabs.map((tab) => (
          <S.TabItemButton
            key={tab.label}
            isActive={activeTab === tab.label}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label} {productList.length}
          </S.TabItemButton>
        ))}
      </S.TabsContainer>
      {tabs.map((tab) => (
        <S.TabPanel key={tab.label} isActive={activeTab === tab.label}>
          {activeTab === tab.label && <tab.ContentComponent />}
        </S.TabPanel>
      ))}
    </>
  );
};

export default Tab;
