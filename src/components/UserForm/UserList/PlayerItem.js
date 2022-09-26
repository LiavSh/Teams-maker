import React from "react";
import classes from "./PlayerItem.module.css";
import trash from "../../UI/Icons/trash.png";

function PlayerItem(props) {
  function removePlayer(event) {
    props.playerNumber(event.target.id);
  }

  return (
    <div className={classes.cardPad}>
      <div className={classes.index}>{props.id + 1}.</div>
      <div className={classes.name}>Name: {props.name}</div>
      <div className={classes.rank}>Rank: {props.rank}</div>
      <img
        className={classes.trash}
        id={props.id}
        onClick={removePlayer}
        src={trash}
        alt="Delete"
      />
    </div>
  );
}

export default PlayerItem;
