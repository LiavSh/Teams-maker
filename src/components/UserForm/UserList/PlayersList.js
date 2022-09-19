import React from "react";
import PlayerCard from "./PlayerCard";
import PlayerItem from "./PlayerItem";
// import classes from "./PlayersList.module.css"

function PlayerList(props) {

  function removePlayer(data){
    props.rmPlayer(data);
  };

  return (
    <div>
      {props.list.map((player, index) => (
        <PlayerCard key={player.id}>
          <PlayerItem playerNumber={removePlayer} id={index} name={player.name} rank={player.rank} />
        </PlayerCard>
      ))}
    </div>
  );
}

export default PlayerList;
