import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

/*
  Understanding React Portals

  return (
    <>
      <MyModal/>
      <MyInputForm/>
    </React.Fragment>
  );

  =>

  Real DOM
  <section>
    <h2>...</h2>
    <div class="my-modal">
      <h2>...</h2>         
    </div>
    <form>
      <label>...</label>
      <input type="text"/>
    </form>
  </section>

  -div.my-modal
  Semantically and from a "clean HTML structure" perspective, having this nested
  modal isn't ideal. It is an overlay to the entire page after all (that's similar for side-
  drawers, other dialogs etc.).

  It's a bit like styling a <div> like a <button> and adding an event
  listener to it: It'll work, but it's not a good practice.

  <div onClick={clickHandler}>Click me, I'm a bad button</div>

  => Real DOM
  <div class="my-modal">
      <h2>...</h2>         
  </div>
  <section>
    <h2>...</h2>
    <form>
      <label>...</label>
      <input type="text"/>
    </form>
  </section>
*/

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
