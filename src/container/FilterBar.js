import React, { useState } from 'react';
import { ExportOutlined } from '@ant-design/icons';
import { AREA_OPTIONS, EXPORT_OPTIONS } from '../constants';
import {
  RangeCalendar, Select, Button, Dropdown,
} from '../component';

const FilterBar = () => {
  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const [area, setArea] = useState('US');
  const onAreaChange = (value) => setArea(value);
  return (
    <div className=" bg-white shadow-sm px-4 h-8 sticky top-0 z-20 mb-4 flex space-x-2">
      <RangeCalendar onChange={onDateChange} />
      <Select options={AREA_OPTIONS} onChange={onAreaChange} value={area} className="w-[120px]" />
      <Dropdown items={EXPORT_OPTIONS}>
        <div className="absolute right-2">
          <Button icon={<div className="mr-2"><ExportOutlined /></div>} text="匯出" type="primary" size="small" />
        </div>
      </Dropdown>
    </div>
  );
};

export default FilterBar;
