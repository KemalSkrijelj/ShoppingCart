import "./Modal.css";
import React, { useState } from "react";
const Modal = ({ children, onConfirm, onCancel }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      {isActive && (
        <div className="modal-conteiner">
          <div className="modal">
            <div className="modal-header">
              <p className="close" onClick={() => setIsActive(!isActive)}>
                &times;
              </p>
            </div>
            <div className="modal-content">Are you sure?{children}</div>
            <div className="modal-footer">
              <button className="btn btn-submit" onClick={onConfirm}>
                Submit
              </button>
              <button className="btn btn-cancel" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
