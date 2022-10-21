import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../component';

const ERPModal = ({ isOpen, onCancel }) => (
  <Modal title="匯出" open={isOpen} onCancel={onCancel}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
);

ERPModal.propTypes = {
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
};

export default ERPModal;
