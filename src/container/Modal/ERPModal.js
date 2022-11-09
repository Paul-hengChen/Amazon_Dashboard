import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../component';

const ERPModal = ({ isOpen, ...props }) => (
  <Modal title="匯出" open={isOpen} {...props}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
);

ERPModal.propTypes = { isOpen: PropTypes.bool };

export default ERPModal;
