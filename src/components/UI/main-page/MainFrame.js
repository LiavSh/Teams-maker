import React from 'react';
import classes from "./MainFrame.module.css";
import photo from "../Icons/football.jpg"

function MainFrame(){

  return (<img className={classes.photo} src={photo} alt="Fotball"/>);
};

export default MainFrame;

