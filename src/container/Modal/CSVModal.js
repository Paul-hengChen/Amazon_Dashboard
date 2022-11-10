import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { InfoCircleTwoTone } from '@ant-design/icons';
import { Modal, MonthPicker, Select } from '../../component';
import { AREA_OPTIONS } from '../../constants';

const CSVModal = ({ isOpen, date, ...props }) => {
  const [selectDate, setSelectDate] = useState(new Date(date));
  const onDateChange = ({ startDate }) => setSelectDate(startDate);

  const [area, setArea] = useState('US');
  const onAreaChange = (value) => setArea(value);

  const month = new Date(selectDate).getMonth() + 1;
  return (
    <Modal title="下載CSV" open={isOpen} centered className="px-3" {...props}>
      <div className="text-center mb-2">
        <InfoCircleTwoTone style={{ fontSize: '72px' }} twoToneColor="#FF9224" />
      </div>
      <div className=" justify-center flex my-4">
        <div className="text-sm mr-2 self-center">日期: </div>
        <MonthPicker
          className="h-8"
          onChange={onDateChange}
          defaultValue={moment(new Date(date), 'YYYY-MM')}
          disabledDate={(currentMonth) => new Date(currentMonth).getMonth() + 1 > 9 || new Date(currentMonth).getMonth() + 1 < 8}
        />
        <div className="text-sm mx-2 self-center">地區: </div>
        <Select options={AREA_OPTIONS} onChange={onAreaChange} value={area} className="w-[120px]" />
      </div>
      <div className="text-center text-lg">{`是否下載 ${month}月份 Amazon 銷售相關資訊 ?`}</div>
    </Modal>
  );
};
CSVModal.propTypes = { isOpen: PropTypes.bool, date: PropTypes.string };

export default CSVModal;
