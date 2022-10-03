import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const RangeCalendar = ({ onChange }) => (
  <RangePicker
    onChange={onChange}
    defaultValue={moment(new Date())}
    defaultPickerValue={moment(new Date())}
    format="YYYY-MM-DD"
    allowClear={false}
    size="large"
  />
);

RangeCalendar.propTypes = {
  onChange: PropTypes.func,
};
export default RangeCalendar;
