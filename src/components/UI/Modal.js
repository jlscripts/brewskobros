import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import classes from "./Modal.module.css";
import { navigationActions } from "../../store/navigation-slice";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.container}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(navigationActions.closeCart());
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={closeCartHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
