import React from 'react';
import './Modal.css';

const Modal = ({
  isOpen,
  onClose,
  confirmClose,
  children
}) => {
  if (!isOpen) return null;

  const handleClose = () => {
    if (confirmClose) {
      confirmClose().then((confirm) => {
        if (confirm) onClose();
      });
    } else {
      onClose();
    }
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-box" onClick={handleModalClick}>
        <div className="modal-header">

          <button className="close-button" onClick={handleClose}>x</button>

        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
