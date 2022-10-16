import React, { useState } from 'react';
import { ExportOutlined } from '@ant-design/icons';
import { AREA_OPTIONS, EXPORT_OPTIONS } from '../constants';
import {
  RangeCalendar, Select, Title, Button, Dropdown,
} from '../component';

const Header = () => {
  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const [area, setArea] = useState('US');
  const onAreaChange = (value) => setArea(value);

  return (
    <div className="p-3 h-12 flex w-full z-10 sticky top-0 bg-black justify-center">
      <RangeCalendar onChange={onDateChange} />
      <Title text="Amazon Dashboard" className="text-white mx-6" />
      <Select options={AREA_OPTIONS} onChange={onAreaChange} value={area} />
      <Dropdown items={EXPORT_OPTIONS}>
        <div className="absolute right-4">
          <Button icon={<div className="mr-2"><ExportOutlined /></div>} text="匯出" type="primary" size="small" />
        </div>
      </Dropdown>
    </div>

  );
};

export default Header;
