import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const Calendar = ({ onChange }) => (
  <RangePicker
    onChange={onChange}
    defaultValue={moment(new Date())}
    defaultPickerValue={moment(new Date())}
    format="YYYY-MM-DD"
    allowClear={false}
  />
);

Calendar.propTypes = {
  onChange: PropTypes.func,
};
export default Calendar;
