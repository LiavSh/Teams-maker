import React, { useState } from "react";
import classes from "./Form.module.css";
import PlayerList from "../UserList/PlayersList.js";
import PlayerForm from "./PlayersForm.js";

const playersArray = [];

function Form() {
  const [players, setPlayers] = useState(playersArray);

  function addPlayer(data) {
    setPlayers(function (prev) {
      return [...prev, data];
    });
  }

  function removePlayer(playerIndex){
    let playerToRemove = [players[playerIndex]];
    setPlayers(prevPlayers => {
      const updatedPlayersList = prevPlayers.filter(player => !playerToRemove.includes(player));
      return updatedPlayersList;
    });
  };
  
  // let valueToRemove = [numArray[indexForRemoval]];
  // numArray = numArray.filter(element => !valueToRemove.includes(element));

  // function removePlayer(playerIndex) {
  //  players.splice(playerIndex,1);
  // setPlayers(players);
  // };

  // function removePlayer(playerIndex) {
  //   console.log("sdfsd");

  //   setPlayers(playersArray.splice(playerIndex, 1));
  // };

  return (
    <div className={classes.formBackground}>
      <PlayerForm userData={addPlayer} />
      <PlayerList rmPlayer={removePlayer} list={players} />
    </div>
  );
}

export default Form;
