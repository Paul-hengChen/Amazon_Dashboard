import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { InfoCircleTwoTone } from '@ant-design/icons';

import {
  Modal, RangeCalendar, Select, Title,
} from '../../component';
import { AREA_OPTIONS } from '../../constants';

const CSVModal = ({ isOpen, ...props }) => {
  const [startDate, setStartDate] = useState(new Date('2022-08-01'));
  const [endDate, setEndDate] = useState(new Date('2022-08-31'));

  // eslint-disable-next-line no-shadow
  const onDateChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const [area, setArea] = useState('US');
  const onAreaChange = (value) => setArea(value);

  return (
    <Modal title="下載CSV" open={isOpen} centered className="px-3" {...props}>
      <div className="text-center mb-2">
        <InfoCircleTwoTone style={{ fontSize: '72px' }} twoToneColor="#FF9224" />
        <Title text="確定下載" />
      </div>
      <div className=" justify-between  flex my-4">
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
    </Modal>
  );
};
CSVModal.propTypes = { isOpen: PropTypes.bool };

export default CSVModal;
