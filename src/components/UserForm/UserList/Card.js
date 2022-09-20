import React from "react";
import "./Card.css"

function Card(props){
  const classes = props.className + " " + props.cardDesign;
   return <div className={classes}>{props.children}</div>;
};

export default Card;
