import React from "react";
import "./Card.css";

function Card(props) {
  const classes = props.className + " cardStyle";
  return <div className={classes}>{props.children}</div>;
}

export default Card;