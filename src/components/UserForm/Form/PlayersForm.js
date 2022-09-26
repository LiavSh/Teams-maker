import React, { useState } from "react";
import UserButton from "../../nav/main-page/UserButton.js";
import classes from "./PlayersForm.module.css";

const MAX_NAME_LENGTH = 10;

function PlayerForm(props) {
  const [player, setPlayer] = useState("");
  const [playerRank, setPlayerRank] = useState("");

  function nameChangeHandler(event) {
    if (player.length < MAX_NAME_LENGTH) {
      setPlayer(event.target.value);
    }
  }

  function rankChangeHandler(event) {
    setPlayerRank(event.target.value);
  }

  function addPlayer() {
    if (player && playerRank) {
      props.userData({
        name: player,
        rank: playerRank,
        id: Math.random().toString(),
      });
      setPlayer("");
      setPlayerRank("");
    }
  }

  return (
    <div className={classes.form}>
      <input
        onChange={nameChangeHandler}
        value={player}
        placeholder="Player Name"
        type="text"
        className={classes.formInput}
      />
      <input
        onChange={rankChangeHandler}
        value={playerRank}
        placeholder="Player Rank"
        type="number"
        max="10"
        min="0"
        step="1"
        className={classes.formInput}
      />
      <div className={classes.buttonBlock} onClick={addPlayer}>
        <UserButton buttonText={"Add"} />
      </div>
    </div>
  );
}

export default PlayerForm;
