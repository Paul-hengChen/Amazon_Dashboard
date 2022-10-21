import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../component';

const CSVModal = ({ isOpen, onCancel }) => (
  <Modal title="下載CSV" open={isOpen} onCancel={onCancel}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
);

CSVModal.propTypes = {
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
};

export default CSVModal;
