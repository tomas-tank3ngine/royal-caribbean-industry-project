import React from "react";
import { Link } from "react-router-dom";
import "./Modal.scss";


function Modal() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h3 className="modal__message">New to Cruises?</h3>
        <button><Link className="modal__link"to={"/survey"} >Click For More Info</Link></button>
      </div>
    </div>
  );
}

export default Modal;
