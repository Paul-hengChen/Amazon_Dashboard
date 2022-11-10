import React from 'react';
import { Modal as AntdModal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const Modal = ({ children, ...props }) => <AntdModal {...props} closeIcon={<div className="w-full h-full"><CloseOutlined className="mt-3" style={{ fontSize: '24px' }} /></div>}>{children}</AntdModal>;

Modal.propTypes = {
  children: PropTypes.element,
};

export default Modal;
