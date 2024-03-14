import React from 'react';

export interface TabItemProps {
  label: string;
  count: number;
  ContentComponent: React.ComponentType;
}
