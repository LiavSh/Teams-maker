import React from "react";
import Card from "../UserForm/UserList/Card";
import classes from "./Player.module.css";
import star from "../UI/Icons/star.png";

function Player(props) {
  function teamsAverage() {
    let sum = 0;
    for (let i = 0; i < props.team.length; i++) {
      sum += parseInt(props.team[i].rank);
    }
    return (sum / props.team.length).toFixed(2);
  }

  return (
    <div className={classes.playersCard}>
      <p className={classes.teamHeader}>
        Team {(props.teamsNum + 1).toString()}
      </p>
      {props.team.map((player, index) => (
        <Card className={classes.player} key={index}>
          <div>
            <div>
              <p className={classes.gradeLabel}>{player.rank}</p>
              <img className={classes.gradeIcon} src={star} alt="star" />
            </div>
            <img
              className={classes.icon}
              src={require("../UI/Icons/players/player" +
                props.teamsNum.toString() +
                ".png")}
              alt="Player"
            />
            <p>{player.name}</p>
          </div>
        </Card>
      ))}
      <div className={classes.teamFooter}>
        <p>{props.team.length} Players</p>
        <p>Team average: {teamsAverage()}</p>
      </div>
    </div>
  );
}
export default Player;
