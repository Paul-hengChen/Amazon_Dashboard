import React, { useState } from 'react';
import { ExportOutlined } from '@ant-design/icons';
import { AREA_OPTIONS } from '../constants';
import {
  RangeCalendar, Select, Title, Button,
} from '../component';

const Header = () => {
  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const [area, setArea] = useState('US');
  const onAreaChange = (value) => setArea(value);

  return (
    <div className="p-3 h-12 flex w-full z-10 sticky top-0  bg-black justify-center ">
      <RangeCalendar onChange={onDateChange} />
      <Title text="Amazon Dashboard" className=" mx-6" />
      <Select options={AREA_OPTIONS} onChange={onAreaChange} value={area} />
      <div className=" absolute right-4">
        <Button icon={<ExportOutlined />} text="匯出" type="primary" size="small" />
      </div>
    </div>

  );
};
export default Header;
