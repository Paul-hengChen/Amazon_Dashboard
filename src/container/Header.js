import React, { useState } from 'react';
import { AREA_OPTIONS } from '../constants';
import { RangeCalendar, Select, Title } from '../component';

const Header = () => {
  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const [area, setArea] = useState('US');
  const onAreaChange = (value) => setArea(value);

  return (
    <div className="p-3 h-12 flex w-full z-10 sticky top-0 bg-teal-600 space-x-10 justify-center">
      <RangeCalendar onChange={onDateChange} />
      <Title text="Amazon_Dashboard" />
      <Select options={AREA_OPTIONS} onChange={onAreaChange} value={area} />
    </div>
  );
};
export default Header;
