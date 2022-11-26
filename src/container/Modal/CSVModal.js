import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { InfoCircleTwoTone } from '@ant-design/icons';
import ExcelJs from 'exceljs';
import { US_HEADER, JP_HEADER } from './schemas';
import {
  Modal, RangeCalendar, Select, Title,
} from '../../component';
import { AREA_OPTIONS } from '../../constants';

const CSVModal = ({ isOpen, onOk, ...props }) => {
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

  const onDownloadClick = async () => {
    const req = await fetch(`/amazon/dashboard?startDate=${startDate}&endDate=${endDate}&area=${area}`);
    const res = await req.json();

    setSubmitted(true);
    if (!res.avgProductSales) { setShowHint(true); return; }

    const { filterData = [] } = res;

    let rows = [];
    if (area === 'JP') {
      const JPData = filterData.map((data) => {
        // eslint-disable-next-line no-param-reassign
        delete data.diffProductSales;
        return { ...data };
      });
      rows = JPData.map((data) => Object.values(data));
    } else rows = filterData.map((data) => Object.values(data));

    const workbook = new ExcelJs.Workbook();
    const sheet = workbook.addWorksheet(area);
    const headers = area === 'US' ? US_HEADER : JP_HEADER;

    sheet.addTable({
      name: 'table名稱',
      ref: 'A1',
      columns: headers.map((header) => ({ name: header })),
      rows,
    });

    workbook.xlsx.writeBuffer().then((content) => {
      const link = document.createElement('a');
      const blobData = new Blob([content], {
        type: 'application/vnd.ms-excel;charset=utf-8;',
      });
      link.download = `${area} ${moment(new Date(startDate)).format('YYYY/MM/DD')} - ${moment(new Date(endDate)).format('YYYY/MM/DD')} Amazon 銷售相關資訊.xlsx`;
      link.href = URL.createObjectURL(blobData);
      link.click();
    });
    onOk();
  };

  useEffect(() => {
    setSubmitted(false);
    setShowHint(false);
  }, [isOpen]);

  return (
    <Modal title="下載 Amazon 財務報表" open={isOpen} centered className="px-3" okText="下載" cancelText="取消" onOk={onDownloadClick} {...props}>
      <div className="text-center mb-2">
        <InfoCircleTwoTone style={{ fontSize: '72px' }} twoToneColor="#FF9224" />
        <Title text="確定下載" />
      </div>
      <div className=" justify-between flex my-4">
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
      <div className="text-center text-lg">
        <p>{`${moment(new Date(startDate)).format('YYYY/MM/DD')} - ${moment(new Date(endDate)).format('YYYY/MM/DD')}`}</p>
        <p>Amazon 銷售相關資訊 ?</p>
      </div>
      {submitted && showHint && <div className="text-center text-lg text-red-500">此時間區間無資料，請重新選擇日期</div>}
    </Modal>
  );
};
CSVModal.propTypes = { isOpen: PropTypes.bool, onOk: PropTypes.func };

export default CSVModal;
