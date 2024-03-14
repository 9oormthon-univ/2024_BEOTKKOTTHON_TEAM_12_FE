import React from 'react';

export interface TabItemProps {
  label: string;
  count: number;
  ContentComponent: React.ComponentType;
}
export interface SaleItem {
  id: number;
  name: string;
  url?: string;
  time: string;
  state: string;
  price: string;
  sold?: string;
}
