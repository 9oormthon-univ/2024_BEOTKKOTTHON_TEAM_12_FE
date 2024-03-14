import React, { useState } from 'react';
import styled from 'styled-components';

interface TabItemProps {
  label: string;
  count: number;
  ContentComponent: React.ComponentType;
}

interface TabProps {
  tabs: TabItemProps[];
}

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  color: var(--grey-4);
`;

const TabItemButton = styled.button<{ isActive: boolean }>`
  width: 33.333%;
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  border-bottom: 1.5px solid
    ${({ isActive }) => (isActive ? 'var(--green-primary)' : 'var(--grey-4)')};
  color: ${({ isActive }) => (isActive ? '#000000' : 'var(--gray-4)')};
  font-family: 'NanumSquareRound', 'Noto Sans KR', sans-serif;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const TabPanel = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;

const Tab: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <>
      <TabsContainer>
        {tabs.map((tab) => (
          <TabItemButton
            key={tab.label}
            isActive={activeTab === tab.label}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label} {tab.count}
          </TabItemButton>
        ))}
      </TabsContainer>
      {tabs.map((tab) => (
        <TabPanel key={tab.label} isActive={activeTab === tab.label}>
          <tab.ContentComponent />
        </TabPanel>
      ))}
    </>
  );
};

export default Tab;
