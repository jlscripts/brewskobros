import React, { useState } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={props.onCloseCart}></Backdrop>,
        portalElement
      )}
      {ReactDOM.createPortal(<ModalOverlay></ModalOverlay>, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
