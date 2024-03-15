import React from 'react';

export interface TabItemProps {
  label: string;
  count: number;
  ContentComponent: React.ComponentType;
}

export interface SalesInProgressProps {
  salesData: SaleItem[];
}

export interface SalesCompletedProps {
  salesCompletedData: SaleItem[];
}

export interface HiddenItemsProps {
  hiddenItemsData: SaleItem[];
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
