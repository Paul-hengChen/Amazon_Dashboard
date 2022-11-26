import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { InfoCircleTwoTone } from '@ant-design/icons';
import ExcelJs from 'exceljs';
import { US_CHECKOUT_HEADER, JP_CHECKOUT_HEADER } from './schemas';
import {
  Modal, Select, Title,
} from '../../component';
import { AREA_OPTIONS } from '../../constants';

const CheckoutModal = ({ isOpen, onOk, ...props }) => {
  const [area, setArea] = useState('US');
  const onAreaChange = (value) => setArea(value);

  const [weekInterval, setWeekInterval] = useState('');
  const [weekOptions, setWeekOptions] = useState([]);
  const onWeekIntervalChange = (value) => {
    setWeekInterval(value);
  };

  useEffect(() => {
    (async () => {
      const req = await fetch(`/amazon/dashboard/weekInterval/options?area=${area}`);
      const { options } = await req.json();
      setWeekOptions(options);
      setWeekInterval('');
    })();
  }, [area]);

  const [showHint, setShowHint] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onDownloadClick = async () => {
    const req = await fetch(`/amazon/dashboard/checkout?weekInterval=${weekInterval}&area=${area}`);
    const { data = [] } = await req.json();
    setSubmitted(true);
    if (!data.length || !weekInterval) { setShowHint(true); return; }

    let rows = [];
    // eslint-disable-next-line no-param-reassign
    const rawData = data.map((item) => { delete item.weekInterval; return { ...item }; });
    rows = rawData.map((item) => Object.values(item));

    const workbook = new ExcelJs.Workbook();
    const sheet = workbook.addWorksheet(area);
    const checkoutHeader = area === 'US' ? US_CHECKOUT_HEADER : JP_CHECKOUT_HEADER;

    sheet.addTable({
      name: 'table名稱',
      ref: 'A1',
      columns: checkoutHeader.map((header) => ({ name: header })),
      rows,
    });

    workbook.xlsx.writeBuffer().then((content) => {
      const link = document.createElement('a');
      const blobData = new Blob([content], {
        type: 'application/vnd.ms-excel;charset=utf-8;',
      });
      link.download = `${area} ${weekInterval} 區間總表.xlsx`;
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
    <Modal title="下載區間總表" open={isOpen} centered className="px-3" okText="下載" cancelText="取消" onOk={onDownloadClick} {...props}>
      <div className="text-center mb-2">
        <InfoCircleTwoTone style={{ fontSize: '72px' }} twoToneColor="#FF9224" />
        <Title text="確定下載" />
      </div>
      <div className="flex my-4 justify-center">
        <div className="mr-4 flex">
          <div className="text-sm mr-4 self-center">地區: </div>
          <Select options={AREA_OPTIONS} onChange={onAreaChange} value={area} className="w-[120px] mr-2" />
        </div>
        <div className="mr-4 flex">
          <div className="text-sm mr-2 self-center">週期區間: </div>
          <Select options={weekOptions} onChange={onWeekIntervalChange} value={weekInterval} className="w-[120px] mr-2" />
        </div>
      </div>
      <div className="text-center text-lg">
        <p>{`${area}地區 ${weekInterval}區間`}</p>
        <p>結帳區間總表 ?</p>
      </div>
      {submitted && showHint && <div className="text-center text-lg text-red-500">此時間區間無資料，請重新選擇日期</div>}
    </Modal>
  );
};
CheckoutModal.propTypes = { isOpen: PropTypes.bool, onOk: PropTypes.func };

export default CheckoutModal;
