import React from "react";
import classes from "./ErrModal.module.css";
import Card from "../../UserForm/UserList/Card.js";
import UserButton from "../../nav/main-page/UserButton";
import ReactDOM from "react-dom";

function ErrModal(props) {
  function Backdrop(props) {
    return (
      <div className={classes.background} onClick={props.onConfirm}>
        <div className={classes.card_center}>
          <Card cardDesign={"ErrModal"}>
            <p className={classes.modal_header}>{props.header}</p>
            <p className={classes.main_contant}>{props.content}</p>
            <div onClick={props.onConfirm} className={classes.button_position}>
              <UserButton buttonText={"Got-it"} />
            </div>
          </Card>
        </div>
        ;
      </div>
    );
  }

  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop
          onConfirm={props.onConfirm}
          header={props.header}
          content={props.content}
        />,
        document.getElementById("backdrop-root")
      )}
    </div>
  );
}
export default ErrModal;
