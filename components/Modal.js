import React, { useState, useEffect, useRef } from "react";
import ClientOnlyPortal from "./ClientOnlyPortal";

const Modal = ({ closeModal, modalIsOpen, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const checkOutsideClick = (event) => {
      // if modal is open and clicked target is not within modal, close modal
      if (
        modalIsOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", checkOutsideClick);

    return () => {
      document.removeEventListener("mousedown", checkOutsideClick);
    };
  }, [modalIsOpen, closeModal]);

  return (
    <>
      {modalIsOpen && (
        <ClientOnlyPortal selector="#modal">
          <div className={`modal ${modalIsOpen === true ? "active" : ""}`}>
            <div ref={modalRef} className="modal-container">
              <div className="modal-header">
                <button
                  className="btn btn-clear float-right"
                  aria-label="Close"
                  onClick={() => closeModal()}
                ></button>
              </div>
              <div className="modal-body">
                <div className="content">{children}</div>
              </div>
            </div>
          </div>
        </ClientOnlyPortal>
      )}
    </>
  );
};

export default Modal;
