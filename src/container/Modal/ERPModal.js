import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { ExclamationCircleTwoTone } from '@ant-design/icons';
import {
  Modal, RangeCalendar, Select, Title,
} from '../../component';
import { AREA_OPTIONS } from '../../constants';

const ERPModal = ({ isOpen, onOk, ...props }) => {
  const [startDate, setStartDate] = useState(new Date('2022-08-01'));
  const [endDate, setEndDate] = useState(new Date('2022-08-31'));

  // eslint-disable-next-line no-shadow
  const onDateChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const [area, setArea] = useState('US');
  const onAreaChange = (value) => setArea(value);

  const [showHint, setShowHint] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onConfirmClick = () => {
    setSubmitted(true);
    setShowHint(!showHint); // TODO: fix the condition
    onOk();
  };

  useEffect(() => {
    setSubmitted(false);
    setShowHint(false);
  }, [isOpen]);

  return (
    <Modal title="匯入 ERP" open={isOpen} className="px-3" centered okText="匯入" cancelText="取消" onOk={onConfirmClick} {...props}>
      <div className="text-center mb-2">
        <ExclamationCircleTwoTone style={{ fontSize: '72px' }} twoToneColor="#CE0000" />
        <Title text="確定匯入" />
      </div>
      <div className=" justify-center flex my-4">
        <div className="text-sm mr-2 self-center">日期: </div>
        <RangeCalendar
          className="h-8 w-[250px]"
          onChange={onDateChange}
          defaultValue={[moment(new Date(startDate), 'YYYY-MM-DD'), moment(new Date(endDate), 'YYYY-MM-DD')]}
          size="small"
        />
        <div className="text-sm mx-2 self-center">地區: </div>
        <Select options={AREA_OPTIONS} onChange={onAreaChange} value={area} className="w-[120px]" />
      </div>
      <div className="text-center text-lg ">
        <p>{`${moment(new Date(startDate)).format('YYYY/MM/DD')} - ${moment(new Date(endDate)).format('YYYY/MM/DD')}`}</p>
        <p>Amazon 銷售相關資訊 ?</p>
      </div>
      {submitted && showHint && <div className="text-center text-lg text-red-500">此時間區間無資料，請重新選擇日期</div>}
    </Modal>
  );
};
ERPModal.propTypes = { isOpen: PropTypes.bool, onOk: PropTypes.func };

export default ERPModal;
