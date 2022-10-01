import React from 'react';
import { DatePicker, Space } from 'antd';
import './style.css';

const { RangePicker } = DatePicker;

const Calendar = () => (
  <Space direction="vertical">
    <RangePicker
      className="flex"
      defaultValue={new Date()}
      defaultPickerValue={new Date()}
      format="YYYY-MM-DD"
      allowClear={false}
      popupStyle={{ backgroundColor: 'white' }}
    />
  </Space>
);

export default Calendar;
