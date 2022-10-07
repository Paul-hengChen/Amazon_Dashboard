import React from 'react';
import Header from './Header';
import { Chart } from '../component';
import OverviewCardSegment from './OverviewCardSegment';

const mockDetails = [
  { key: 1, title: 'GG', value: '1234' },
  { key: 2, title: 'GG', value: '1234' },
  { key: 3, title: 'GG', value: '1234' },
  { key: 4, title: 'GG', value: '1234' },
  { key: 5, title: 'GG', value: '1234' },
  { key: 6, title: 'GG', value: '1234' },
  { key: 7, title: 'GG', value: '1234' },
  { key: 8, title: 'GG', value: '1234' },
];

const AmazonDashboard = () => (
  <>
    <Header />
    <OverviewCardSegment details={mockDetails} />
    <div className="grid grid-cols-3">
      <Chart title="營業額" />
      <Chart title="銷售數量" />
      <Chart title="購買人次" />
      <Chart title="平均客單價" />
      <Chart title="平均購買數量" />
      <Chart title="產品銷售金額 TOP 10" />
      <Chart title="產品銷售數量 TOP 10" />
    </div>
  </>
);

export default AmazonDashboard;
