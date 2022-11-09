import React from 'react';
import { Modal as AntdModal } from 'antd';
import PropTypes from 'prop-types';

const Modal = ({ children, ...props }) => <AntdModal {...props}>{children}</AntdModal>;

Modal.propTypes = {
  children: PropTypes.element,
};

export default Modal;
