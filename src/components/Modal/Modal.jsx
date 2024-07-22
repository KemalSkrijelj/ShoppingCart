import { AppContext } from "../../context/AppContext";
import "./Modal.css";
import React, { useContext, useState } from "react";
const Modal = ({ children }) => {
  const {removeFromCart} = useContext(AppContext)
  return (
    <>
      <div className="modal-conteiner">
        <div className="modal">
          <div className="modal-header">
            <p className="close">&times;</p>
          </div>
          <div className="modal-content">Are you sure?{children}</div>
          <div className="modal-footer">
            <button className="btn btn-submit">Submit</button>
            <button className="btn btn-cancel">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
