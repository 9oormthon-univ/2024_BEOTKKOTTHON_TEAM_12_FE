import React, { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  color: var(--grey-4);
`;

const TabItem = styled.button`
  width: 34%;
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  border-bottom: 1.5px solid var(--grey-4);
  color: var(--gray-4);
  cursor: pointer;

  &.active {
    border-bottom: 1.5px solid var(--green-primary);
    color: #000000;
  }

  &:focus {
    outline: none;
  }
`;

const TabPanel = styled.div`
  display: none;
  &.active {
    display: block;
  }
`;

const Tab = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const saleInfo = {
    sales: 4,
    salesComplete: 1,
    hide: 2,
  };
  return (
    <>
      <TabsContainer>
        <TabItem
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => setActiveTab('tab1')}
        >
          판매중 {saleInfo.sales}
        </TabItem>
        <TabItem
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => setActiveTab('tab2')}
        >
          판매 완료 {saleInfo.salesComplete}
        </TabItem>
        <TabItem
          className={activeTab === 'tab3' ? 'active' : ''}
          onClick={() => setActiveTab('tab3')}
        >
          숨김 {saleInfo.hide}
        </TabItem>
      </TabsContainer>
      <TabPanel className={activeTab === 'tab1' ? 'active' : ''}>
        {/* 탭1 관련 내용 */}
        판매중인 상품의 내용이 여기에 표시됩니다.
      </TabPanel>
      <TabPanel className={activeTab === 'tab2' ? 'active' : ''}>
        {/* 탭2 관련 내용 */}
        판매 완료된 상품의 내용이 여기에 표시됩니다.
      </TabPanel>
      <TabPanel className={activeTab === 'tab3' ? 'active' : ''}>
        {/* 탭3 관련 내용 */}
        숨겨진 상품의 내용이 여기에 표시됩니다.
      </TabPanel>
    </>
  );
};

export default Tab;
