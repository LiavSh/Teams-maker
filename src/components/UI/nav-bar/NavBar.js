import React from "react";
import Card from "./Card";
import NavBarButton from "./NavBarButton";
import classes from "./NavBar.module.css";
import logo from "/Users/liavshitrit/Documents/web-dev/Teams-maker/src/components/UI/Icons/mainlogo.png";

const NavBar = () => {
  function DummyLink(event) {
    event.preventDefault();
  }

  return (
    <Card>
      <div className={classes.navBarPad}>
        <img className={classes.logoStyle} src={logo} alt="main logo"></img>
        <div className={classes.screenPos}>
          <NavBarButton contant="Register" click={DummyLink} />
          <NavBarButton contant="Sign-In" click={DummyLink} />
          <NavBarButton contant="About" click={DummyLink} />
        </div>
      </div>
    </Card>
  );
};

export default NavBar;
