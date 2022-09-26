import React from 'react';
import classes from "./UserButton.module.css";

function UserButton(props){
  return <button className={classes.button}>{props.buttonText}</button>;
};

export default UserButton;