import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const RangeCalendar = ({ onChange, ...props }) => {
  const onDateChange = (_, dateString) => {
    const startDate = dateString[0];
    const endDate = dateString[1];
    onChange({ startDate, endDate });
  };
  return (
    <RangePicker
      onChange={onDateChange}
      defaultValue={[moment(new Date()), moment(new Date())]}
      format="YYYY-MM-DD"
      allowClear={false}
      size="large"
      {...props}
    />
  );
};

RangeCalendar.propTypes = {
  onChange: PropTypes.func,
};
export default RangeCalendar;
