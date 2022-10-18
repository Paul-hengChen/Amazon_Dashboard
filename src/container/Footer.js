import React from 'react';
import { CopyrightOutlined } from '@ant-design/icons';

const Footer = () => (
  <div className="Footer z-10 sticky bottom-0 justify-center bg-gray-100">
    <div className="mx-6 flex items-center">
      Copyright
      <CopyrightOutlined className="mx-1" />
      2022 NeuroBonic Inc.
    </div>
  </div>
);

export default Footer;
