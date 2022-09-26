import React from "react";
import classes from "./FrontPage.module.css";
import photo from "../../UI/Icons/football.jpg"

function FrontPage() {
  return <img className={classes.photo} src={photo} alt="Fotball" />;
}

export default FrontPage;