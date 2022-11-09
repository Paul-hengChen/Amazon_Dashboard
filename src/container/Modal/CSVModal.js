import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../component';

const CSVModal = ({ isOpen, ...props }) => (
  <Modal title="下載CSV" open={isOpen} {...props}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
);

CSVModal.propTypes = { isOpen: PropTypes.bool };

export default CSVModal;
