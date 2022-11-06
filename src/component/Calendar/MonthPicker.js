import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DatePicker as AntdDatePicker } from 'antd';
import { getDaysInMonth } from 'date-fns';

const MonthPicker = ({ onChange, defaultValue }) => {
  const onDateChange = (_, dateString) => {
    const lastDay = getDaysInMonth(new Date(dateString));
    const startDate = `${moment(new Date(dateString)).format('YYYY-MM')}-01`;
    const endDate = `${moment(new Date(dateString)).format('YYYY-MM')}-${lastDay}`;
    onChange({ startDate, endDate });
  };
  return (
    <AntdDatePicker
      onChange={onDateChange}
      picker="month"
      defaultValue={defaultValue}
    />
  );
};

MonthPicker.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};
export default MonthPicker;
