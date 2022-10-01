import React, { useState } from 'react';
import Calendar from './Calendar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onCalendarClick = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <div className="p-3 h-12 flex w-full z-10 sticky top-0 bg-teal-600" onClick={onCalendarClick} aria-hidden="true">
      <Calendar />
    </div>
  );
};
export default Header;
