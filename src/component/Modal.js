import React from 'react';
import { Modal as AntdModal } from 'antd';
import PropTypes from 'prop-types';

const Modal = ({
  title, open, onConfirmClick, onCancel, children,
}) => <AntdModal open={open} title={title} onOk={onConfirmClick} onCancel={onCancel}>{children}</AntdModal>;

Modal.propTypes = {
  title: PropTypes.string,
  onConfirmClick: PropTypes.func,
  onCancel: PropTypes.func,
  children: PropTypes.element,
  open: PropTypes.bool,
};

export default Modal;
