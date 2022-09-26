import React from 'react';
import classes from "./Footer.module.css";
import americanFootball from "../UI/Icons/balls/american-football.png"
import basketball from "../UI/Icons/balls/basketball.png"
import baseball from "../UI/Icons/balls/baseball.png"
import football from "../UI/Icons/balls/football.png"
import tennis from "../UI/Icons/balls/tennis.png"
import volleyball from "../UI/Icons/balls/volleyball.png"

function Footer(){

  return (<div className={classes.footerDesign}>
    <div>
    <img className={classes.ball}  src={baseball} alt="baseball IMG"/>
    <img className={classes.ball}  src={basketball} alt="basketball IMG"/>
    <img className={classes.ball}  src={football} alt="football IMG"/>
    <img className={classes.ball} src={americanFootball} alt="american Football IMG"/>
    <img className={classes.ball}  src={tennis} alt="tennis IMG"/>
    <img className={classes.ball}  src={volleyball} alt="volleyball IMG"/>
    </div>
    <p className={classes.label}>Contact</p>
    <p className={classes.label}>About</p>
    <p className={classes.label}>Help</p>
    <p className={classes.rights}>All rights reserved © </p>
  </div>);
};

export default Footer;