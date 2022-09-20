import React from "react";
import Card from "./Card";
import PlayerItem from "./PlayerItem";
// import classes from "./PlayersList.module.css"

function PlayerList(props) {

  function removePlayer(data){
    props.rmPlayer(data);
  };


  return (
    <div>
      {props.list.map((player, index) => (
        <Card cardDesign={"PlayerCardStyle"} key={player.id}>
          <PlayerItem playerNumber={removePlayer} id={index} name={player.name} rank={player.rank} />
        </Card>
      ))}
    </div>
  );
}

export default PlayerList;
