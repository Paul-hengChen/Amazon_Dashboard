import React, { useState, useEffect } from 'react';
import { Chart } from '../../component';
import OverviewCardSegment from './OverviewCardSegment';
import FilterBar from './FilterBar';
import { buildChartDataset } from './schemas';
import { CSVModal, ERPModal } from '../Modal';

const AmazonDashboardPage = () => {
  const [modalOpen, setModalOpen] = useState('');

  const onDropdownClick = (key) => {
    setModalOpen(key);
  };

  const [startDate, setStartDate] = useState(new Date('2022-08-01'));
  const [endDate, setEndDate] = useState(new Date('2022-08-30'));

  // eslint-disable-next-line no-shadow
  const onDateChange = ({ startDate, endDate }) => {
    setStartDate(new Date(startDate));
    setEndDate(new Date(endDate));
  };

  const [area, setArea] = useState('US');
  const onAreaChange = (value) => setArea(value);

  const [overview, setOverview] = useState([]);
  const [dashboards, setDashboards] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/amazon/dashboard?startDate=${startDate}&endDate=${endDate}`);
      const detail = await res.json();
      setOverview(detail);
      // eslint-disable-next-line no-shadow
      const dashboards = buildChartDataset(detail);
      setDashboards(dashboards);
    })();
  }, [startDate, endDate]);

  return (
    <>
      <FilterBar
        onDropdownClick={onDropdownClick}
        onDateChange={onDateChange}
        onAreaChange={onAreaChange}
        area={area}
      />
      <OverviewCardSegment details={overview} />
      <div className="grid grid-cols-2 p-3">
        {dashboards.map((dashboard) => <Chart dataset={dashboard} />)}
      </div>
      <ERPModal isOpen={modalOpen === 'ERP'} onCancel={() => setModalOpen('')} id="modal" />
      <CSVModal isOpen={modalOpen === 'CSV'} onCancel={() => setModalOpen('')} id="modal" />
    </>
  );
};

export default AmazonDashboardPage;
