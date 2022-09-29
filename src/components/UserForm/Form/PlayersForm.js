import React, { useState } from "react";
import UserButton from "../../nav/main-page/UserButton.js";
import ErrModal from "../../UI/UI components/ErrModal.js";
import classes from "./PlayersForm.module.css";

const MAX_NAME_LENGTH = 10;

function PlayerForm(props) {
  const [player, setPlayer] = useState("");
  const [playerRank, setPlayerRank] = useState("");
  const [err, setErr] = useState();

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
    } else {
      setErr({
        header: "Somthing went wrong...",
        content: "Player name/Player rank is missing",
      });
    }
  }

  return (
    <div>
      {err && (
        <ErrModal
          header={err.header}
          content={err.content}
          onConfirm={function () {
            setErr();
          }}
        />
      )}
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
    </div>
  );
}

export default PlayerForm;
