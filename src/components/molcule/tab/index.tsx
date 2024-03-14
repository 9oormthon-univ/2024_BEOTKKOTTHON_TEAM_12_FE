import React, { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
`;

const TabItem = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  border-bottom: 3px solid transparent;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #0000ff; // 활성 탭의 하이라이트 색상입니다.
    font-weight: bold;
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

  return (
    <>
      <TabsContainer>
        <TabItem
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => setActiveTab('tab1')}
        >
          판매중 4
        </TabItem>
        <TabItem
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => setActiveTab('tab2')}
        >
          판매 완료 1
        </TabItem>
        <TabItem
          className={activeTab === 'tab3' ? 'active' : ''}
          onClick={() => setActiveTab('tab3')}
        >
          숨김 2
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
