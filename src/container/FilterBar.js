import React from 'react';
import { ExportOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { AREA_OPTIONS, EXPORT_OPTIONS } from '../constants';
import {
  RangeCalendar, Select, Button, Dropdown,
} from '../component';

const FilterBar = ({
  onDropdownClick, onDateChange, onAreaChange, area,
}) => (
  <div className=" bg-white shadow-sm px-4 h-8 sticky top-0 z-20 mb-4 flex space-x-2">
    <RangeCalendar onChange={onDateChange} />
    <Select options={AREA_OPTIONS} onChange={onAreaChange} value={area} className="w-[120px]" />
    <Dropdown items={EXPORT_OPTIONS} onClick={onDropdownClick}>
      <div className="absolute right-2">
        <Button icon={<div className="mr-2"><ExportOutlined /></div>} text="匯出" type="primary" size="small" />
      </div>
    </Dropdown>
  </div>
);

FilterBar.propTypes = {
  onDropdownClick: PropTypes.func,
  onDateChange: PropTypes.func,
  onAreaChange: PropTypes.func,
  area: PropTypes.string,
};

export default FilterBar;
