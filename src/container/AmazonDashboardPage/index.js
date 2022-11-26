/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { Chart } from '../../component';
import OverviewCardSegment from './OverviewCardSegment';
import FilterBar from './FilterBar';
import { buildChartDataset } from './schemas';
import { CSVModal, ERPModal, CheckoutModal } from '../Modal';
import { noDataImg } from '../../img/png';

const AmazonDashboardPage = () => {
  const [isFetch, setIsFetched] = useState(false);

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

  const [modalOpen, setModalOpen] = useState('');
  const onDropdownClick = (key) => {
    setModalOpen(key);
  };

  useEffect(() => {
    (async () => {
      setIsFetched(false);
      const req = await fetch(`/amazon/dashboard?startDate=${startDate}&endDate=${endDate}&area=${area}`);
      const res = await req.json();
      if (!res?.quantityOfTOP10?.length) { setOverview([]); setDashboards([]); } else {
        setOverview(res);
        // eslint-disable-next-line no-shadow
        const dashboards = buildChartDataset(res, area);
        setDashboards(dashboards);
      }
      setIsFetched(true);
    })();
  }, [startDate, endDate, area]);

  return (
    <>
      <FilterBar
        onDropdownClick={onDropdownClick}
        onDateChange={onDateChange}
        onAreaChange={onAreaChange}
        area={area}
      />
      {!isFetch ? <div className="absolute top-1/2 right-1/2"><Spin tip="Loading..." size="large" delay={2} /></div> : !overview?.quantityOfTOP10?.length ? (
        <>
          <div className="flex justify-center">
            <img src={noDataImg} alt="" className="w-[200px] h-[200px] mt-[300px]" />
          </div>
          <div className="text-xl text-center">此時間區間無資料，請重新選擇日期</div>
        </>
      )
        : (
          <>
            <OverviewCardSegment details={overview} />
            <div className="grid grid-cols-2 p-3">
              { dashboards.map((dashboard) => <Chart dataset={dashboard} />)}
            </div>
            <ERPModal
              isOpen={modalOpen === 'ERP'}
              onCancel={() => setModalOpen('')}
              onOk={setModalOpen}
            />
            <CSVModal
              isOpen={modalOpen === 'CSV'}
              onCancel={() => setModalOpen('')}
              onOk={setModalOpen}
            />
            <CheckoutModal isOpen={modalOpen === 'checkout'} onCancel={() => setModalOpen('')} onOk={setModalOpen} />
          </>
        )}

    </>
  );
};

export default AmazonDashboardPage;
