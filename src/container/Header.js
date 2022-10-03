import React from 'react';
import { Calendar } from '../component';

const Header = () => {
  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="p-3 h-12 flex w-full z-10 sticky top-0 bg-teal-600">
      <Calendar onChange={onDateChange} />
    </div>
  );
};
export default Header;
