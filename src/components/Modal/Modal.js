import React from "react";
import { Link } from "react-router-dom";
import "./Modal.scss";
import modalImage from "../../assets/images/modal-image.jpg";

function Modal({ onClosed }) {
  function onCancelClicked() {
    onClosed();
  }
  return (
    <div className="modal">
      <section className="modal-content">
        <section className="modal-content__section modal-content__section--close">
          <button
            className="modal-content__section-close-button"
            onClick={onCancelClicked}
          >
            X
          </button>
        </section>
        <section className="modal-content__section modal-content__section--top">
          <h3 className="modal-content__section-message">
            Take Part on Your Own Royal Adventure
          </h3>
        </section>
        <section className="modal-content__section modal-content__section--middle">
          <img
            className="modal-content__section-image"
            src={modalImage}
            alt="modal-image"
          />
        </section>
        <section className="modal-content__section modal-content__section--bottom">
          <button className="modal-content__section-button">
            <Link className="modal-content__section-link" to={"/survey"}>
              CONTINUE
            </Link>
          </button>
          <h3 className="modal-content__section-message">
            Adventures Made For YOU!
          </h3>
        </section>
      </section>
    </div>
  );
}

export default Modal;
