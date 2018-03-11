import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,.95)',
  },
  content: {
    top: '0',
    left: '0',
    width: '50vw',
    minWidth: '320px',
    maxWidth: '1280px',
    bottom: '0',
    padding: '0',
    borderRadius: '0',
    backgroundColor: 'transparent',
    border: 'none',
  },
};

const DrawerModal = ({ onClose, contentLabel, children }) => (
  <Modal
    isOpen={true}
    style={customStyles}
    onRequestClose={onClose}
    contentLabel="Character Modal"
  >
    {children}
  </Modal>
);

DrawerModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  contentLabel: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default DrawerModal;
