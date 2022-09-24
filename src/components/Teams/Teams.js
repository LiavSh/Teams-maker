import React from "react";
import Card from "../UserForm/UserList/Card";
import Player from "./Player";
import classes from "./Teams.module.css";

function Teams(props) {
  return (
    <div className={classes.background}>
      <div className={classes.cardSettings}>
        {props.teamsList.map((players, index) => (
            <Card cardDesign={"TeamsCardStyle"} key={index}>
              <Player team={players} teamsNum={index} />
            </Card>
        ))}
      </div>
    </div>
  );
}

export default Teams;
