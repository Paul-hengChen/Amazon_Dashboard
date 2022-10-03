import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import './style.css';

const { RangePicker } = DatePicker;

const Calendar = () => (
  <RangePicker
    className="flex"
    defaultValue={moment(new Date())}
    defaultPickerValue={moment(new Date())}
    format="YYYY-MM-DD"
    allowClear={false}
    popupStyle={{ backgroundColor: 'white' }}
  />
);

export default Calendar;
