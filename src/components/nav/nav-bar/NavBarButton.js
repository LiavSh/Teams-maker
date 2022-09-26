import React from "react";
import classes from "./NavBarButton.module.css";

function NavBarButton(props) {
  return (
    <button className={classes.button} onClick={props.click}>
      {props.contant}
    </button>
  );
}

export default NavBarButton;
