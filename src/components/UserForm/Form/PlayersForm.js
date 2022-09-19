import React, { useState } from "react";
import UserButton from "../../UI/main-page/UserButton";
import classes from "./PlayersForm.module.css";

function PlayerForm(props) {
  const [player, setPlayer] = useState("");
  const [playerRank, setPlayerRank] = useState("");

  function nameChangeHandler(event) {
    setPlayer(event.target.value);
  }

  function rankChangeHandler(event) {
    setPlayerRank(event.target.value);
  }

  function addPlayer(event) {
    event.preventDefault();

    props.userData({
      name: player,
      rank: playerRank,
      id: Math.random().toString(),
    });
    setPlayer("");
    setPlayerRank("");
  }

  return (
    <form className={classes.form} onSubmit={addPlayer}>
      <p className={classes.form_header}>Add New Player</p>
      <input
        onChange={nameChangeHandler}
        value={player}
        placeholder="Player Name"
        type="text"
        className={classes.formInput}
      ></input>
      <input
        onChange={rankChangeHandler}
        value={playerRank}
        placeholder="Player Rank"
        type="number"
        max="10"
        min="0"
        step="0.5"
        className={classes.formInput}
      ></input>
      <UserButton type="submit" buttonText={"Add"} />
    </form>
  );
}

export default PlayerForm;