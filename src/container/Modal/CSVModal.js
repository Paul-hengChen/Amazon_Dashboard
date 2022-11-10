import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { InfoCircleTwoTone } from '@ant-design/icons';
import { Modal, MonthPicker } from '../../component';

const CSVModal = ({ isOpen, date, ...props }) => {
  const [doDate, setStartDate] = useState(new Date(date));

  const onChange = ({ startDate }) => setStartDate(startDate);
  const month = new Date(doDate).getMonth() + 1;
  return (
    <Modal title="下載CSV" open={isOpen} centered className=" px-3" {...props}>
      <div className="text-center mb-2">
        <InfoCircleTwoTone style={{ fontSize: '72px' }} twoToneColor="#FF9224" />
      </div>
      <div className=" justify-center flex my-4">
        <div className="text-sm mr-2 self-center">日期: </div>
        <MonthPicker
          className="h-8"
          onChange={onChange}
          defaultValue={moment(new Date(date), 'YYYY-MM')}
          disabledDate={(currentMonth) => new Date(currentMonth).getMonth() + 1 > 9 || new Date(currentMonth).getMonth() + 1 < 8}
        />
      </div>
      <div className="text-center text-lg">{`是否下載 ${month}月份 Amazon 銷售相關資訊 ?`}</div>
    </Modal>
  );
};
CSVModal.propTypes = { isOpen: PropTypes.bool, date: PropTypes.string };

export default CSVModal;
