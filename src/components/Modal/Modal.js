import React from "react";
import "./Modal.scss";

function Modal() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h3 className="modal__message">New to Cruises?</h3>
        <button>Click For More Info</button>
      </div>
    </div>
  );
}

export default Modal;
