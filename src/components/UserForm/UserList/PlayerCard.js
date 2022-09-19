import React from "react";
import "./PlayerCard.css"

function PlayerCard(props){
  const classes = props.className + " PlayerCardStyle";

   return <div className={classes}>{props.children}</div>;

};

export default PlayerCard;
