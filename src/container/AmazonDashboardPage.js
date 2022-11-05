import React, { useState, useEffect } from 'react';
// import moment from 'moment';
import { Chart } from '../component';
import OverviewCardSegment from './OverviewCardSegment';
import FilterBar from './FilterBar';
import { CSVModal, ERPModal } from './Modal';

const AmazonDashboardPage = () => {
  const [modalOpen, setModalOpen] = useState('');

  const onDropdownClick = (key) => {
    setModalOpen(key);
  };

  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const [area, setArea] = useState('US');
  const onAreaChange = (value) => setArea(value);

  const [details, setDetails] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('/amazon/dashboard/overview?startDate=2022/08/01&&endDate=2022/08/05');
      const data = await res.json();
      setDetails(data);
    })();
  }, []);

  return (
    <>
      <FilterBar
        onDropdownClick={onDropdownClick}
        onDateChange={onDateChange}
        onAreaChange={onAreaChange}
        area={area}
      />
      <OverviewCardSegment details={details} />
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
