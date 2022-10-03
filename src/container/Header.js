import React from 'react';
import { AREA_OPTIONS } from '../constants';
import { RangeCalendar, Select } from '../component';

const Header = () => {
  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  console.log({ AREA_OPTIONS });

  return (
    <div className="p-3 h-12 flex w-full z-10 sticky top-0 bg-teal-600">
      <RangeCalendar onChange={onDateChange} />
      <Select options={AREA_OPTIONS} />
    </div>
  );
};
export default Header;
