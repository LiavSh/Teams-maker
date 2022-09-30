import React, { useState } from "react";
import classes from "./Form.module.css";
import PlayerList from "../UserList/PlayersList.js";
import PlayerForm from "./PlayersForm.js";
import Counter from "./Counter.js";
import UserButton from "../../nav/main-page/UserButton.js";
import ErrModal from "../../UI/UI components/ErrModal";
import { createTeams, teamsCreationCheck } from "../../utils/utils";

const MAXTEAMS = 4;

const playersArray = [];

function Form(props) {
  const [players, setPlayers] = useState(playersArray);
  const [teamsNumber, setTeamsNumber] = useState(0);
  const [err, setErr] = useState();

  function addPlayer(data) {
    setPlayers(function (prev) {
      return [...prev, data];
    });
  }

  function removePlayer(playerIndex) {
    let playerToRemove = [players[playerIndex]];
    setPlayers((prevPlayers) => {
      const updatedPlayersList = prevPlayers.filter(
        (player) => !playerToRemove.includes(player)
      );
      return updatedPlayersList;
    });
  }

  function numOfTeams(numberOfTeams) {
    setTeamsNumber(numberOfTeams);
  }

  function teamsCreation() {
    const validationCheck = teamsCreationCheck(teamsNumber, players);
    if (validationCheck) {
      setErr(validationCheck);
    } else {
      props.playersTeams(createTeams(teamsNumber, players));
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
      <div className={classes.formBackground}>
        <div className={classes.sections}>
          <p className={classes.formHeader}>Select number of teams</p>
          <Counter
            className={classes.counter}
            teamsCounter={numOfTeams}
            max={MAXTEAMS}
          />
        </div>
        <div className={classes.sections}>
          <p className={classes.formHeader}>Enter players</p>
          <PlayerForm userData={addPlayer} />
          <PlayerList rmPlayer={removePlayer} list={players} />
        </div>
        <div onClick={teamsCreation}>
          <UserButton buttonText={"Create Teams"} />
        </div>
      </div>
    </div>
  );
}

export default Form;
