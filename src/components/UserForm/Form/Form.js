import React, { useState } from "react";
import classes from "./Form.module.css";
import PlayerList from "../UserList/PlayersList.js";
import PlayerForm from "./PlayersForm.js";
import Counter from "./Counter.js";
import UserButton from "../../nav/main-page/UserButton.js";
import ErrModal from "../../UI/UI components/ErrModal";

const MAXTEAMS = 4;

const playersArray = [];

function Form(props) {
  let temp;
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
  };

  function numOfTeams(numberOfTeams) {
    setTeamsNumber(numberOfTeams);
  };

  function createTeams() {
    console.log(teamsNumber);
    if (!teamsNumber) {
      setErr({
        header: "Somthing is missing...",
        content: "Please select number of teams",
      });
    } else if (players.length < 1) {
      setErr({
        header: "Somthing is missing...",
        content: "Please enter players",
      });
    } else if (players.length < teamsNumber) {
      setErr({
        header: "Somthing went wrong...",
        content: "Number of players must be greater then number of teams",
      });
    } else {

      let sortedPlayers = [...players];
      sortedPlayers.sort(function (a, b) {
        return b.rank - a.rank;
      });

      for (
        let i = teamsNumber;
        i < sortedPlayers.length;
        i += teamsNumber * 2
      ) {
        if (i + teamsNumber - 1 < sortedPlayers.length) {
          temp = sortedPlayers[i];
          sortedPlayers[i] = sortedPlayers[i + teamsNumber - 1];
          sortedPlayers[i + teamsNumber - 1] = temp;
        }
      }

      const listOfTeams = [];

      for (let i = 0; i < teamsNumber; i++) {
        listOfTeams.push([]);
      }

      for (let i = 0; i < sortedPlayers.length; i++) {
        listOfTeams[i % teamsNumber].push(sortedPlayers[i]);
      }

      props.playersTeams(listOfTeams);
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
        <div onClick={createTeams}>
          <UserButton buttonText={"Create Teams"} />
        </div>
      </div>
    </div>
  );
}

export default Form;
