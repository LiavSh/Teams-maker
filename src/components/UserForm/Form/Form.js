import React, { useState } from "react";
import classes from "./Form.module.css";
import PlayerList from "../UserList/PlayersList.js";
import PlayerForm from "./PlayersForm.js";
import Counter from "./Counter.js";
import UserButton from "../../UI/main-page/UserButton";

const playersArray = [
  { name: "Leo", rank: 4, id: 0.34423 },
  { name: "Danny", rank: 8, id: 0.35123 },
  { name: "John", rank: 9, id: 0.737 },
  { name: "George", rank: 5, id: 0.14656 },
  { name: "Carlos", rank: 3, id: 0.13243 },
  { name: "Brad", rank: 2, id: 0.1313334 },
  { name: "Ben", rank: 6, id: 0.256 },
  { name: "David", rank: 7, id: 0.666499 },
  { name: "Joseph", rank: 10, id: 0.99534 },
  { name: "Leeo", rank: 11, id: 0.344423 },
  { name: "Danrwny", rank: 12, id: 0.353123 },
  { name: "Johnsdf", rank: 13, id: 0.73722 },
  { name: "Georgwere", rank: 14, id: 0.1464556 },
  { name: "Carlosfds", rank: 15, id: 0.13243645 },
  { name: "Brawed", rank: 16, id: 0.131333456 },
  { name: "Benwer", rank: 17, id: 0.252336 },
  { name: "Davwerid", rank: 18, id: 0.6662466499 },
  { name: "Josdgseph", rank: 19, id: 0.9953784 },
  { name: "David23", rank: 20, id: 0.6664999999 },
];

function Form() {
  let temp;
  const [players, setPlayers] = useState(playersArray);
  const [teamsNumber, setTeamsNumber] = useState();

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

  function createTeams() {
    let sortedPlayers = [...players];
    sortedPlayers.sort(function (a, b) {
      return b.rank - a.rank;
    });

    for (let i = teamsNumber; i < sortedPlayers.length; i += teamsNumber * 2) {
      if (i + teamsNumber - 1 < sortedPlayers.length) {
        temp = sortedPlayers[i];
        sortedPlayers[i] = sortedPlayers[i + teamsNumber - 1];
        sortedPlayers[i + teamsNumber - 1] = temp;
      }
    }

    const teams = []

    for (let i = 0; i < teamsNumber; i++) {
      teams.push([]);
    };

    for (let i = 0; i < sortedPlayers.length; i++) {
      teams[i % teamsNumber].push(sortedPlayers[i]);
    };
  };

  return (
    <div>
      <div className={classes.formBackground}>
        <div className={classes.sections}>
          <p className={classes.formHeader}>Select number of teams</p>
          <Counter className={classes.counter} amount={numOfTeams} />
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
