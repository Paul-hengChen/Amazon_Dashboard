import React, { useState } from 'react';
import { Chart } from '../component';
import OverviewCardSegment from './OverviewCardSegment';
import FilterBar from './FilterBar';
import { CSVModal, ERPModal } from './Modal';

const mockDetails = [
  { key: 1, title: '時間', value: 'M9' },
  { key: 2, title: '銷售金額', value: '28103.66' },
  { key: 3, title: '相關平台費用', value: '8309.88' },
  { key: 4, title: '平均購買數量', value: '7.07' },
  { key: 5, title: '銷售數量', value: '1070' },
  { key: 6, title: '營業收入', value: '9037.55' },
  { key: 7, title: '購買人次', value: '999' },
  { key: 8, title: '平均客單價', value: '14.07' },
];

const AmazonDashboardPage = () => {
  const [modalOpen, setModalOpen] = useState('');
  const onDropdownClick = (key) => {
    setModalOpen(key);
  };

  return (

    <>
      <FilterBar onDropdownClick={onDropdownClick} />
      <OverviewCardSegment details={mockDetails} />
      <div className="grid grid-cols-2 p-3">
        <Chart title="營業額" />
        <Chart title="銷售數量" />
        <Chart title="購買人次" />
        <Chart title="平均客單價" />
        <Chart title="平均購買數量" />
        <Chart title="產品銷售金額 TOP 10" />
        <Chart title="產品銷售數量 TOP 10" />
      </div>
      <ERPModal isOpen={modalOpen === 'ERP'} onCancel={() => setModalOpen('')} id="modal" />
      <CSVModal isOpen={modalOpen === 'CSV'} onCancel={() => setModalOpen('')} id="modal" />
    </>
  );
};

export default AmazonDashboardPage;
