import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const RangeCalendar = ({ onChange, value }) => (
  <RangePicker
    onChange={onChange}
    defaultValue={[moment(new Date(), 'DD/MM/YYYY'), moment(new Date(), 'DD/MM/YYYY')]}
    format="YYYY-MM-DD"
    allowClear={false}
    size="large"
    value={value}
  />
);

RangeCalendar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
export default RangeCalendar;
