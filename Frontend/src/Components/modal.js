import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        {children}
        <Button label="Close" onClick={onClose} />
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
