import React from "react";
import Card from "./Card";
import NavBarButton from "./NavBarButton";
import classes from "./NavBar.module.css";
import { ReactComponent as Navlogo } from "../../../logo.svg";

const NavBar = () => {
  function DummyLink(event) {
    event.preventDefault();
  }

  return (
    <Card>
      <div className={classes.navBarPad}>
        <Navlogo className={classes.logoStyle}/>
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
