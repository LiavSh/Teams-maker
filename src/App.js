import React, { useState} from "react";
import classes from "./App.module.css";
import Footer from "./components/footer/Footer";
import Teams from "./components/Teams/Teams";
import FrontPage from "./components/nav/main-page/FrontPage";
import NavBar from "./components/nav/nav-bar/NavBar";
import Form from "./components/UserForm/Form/Form";

function App() {
  const [equaldTeams, setEqualdTeams] = useState([]);

  function evenTeams(teams) {
    setEqualdTeams(teams);
  }

  return (
    <div className={classes.App}>
      <NavBar />
      <FrontPage />
      <Form playersTeams={evenTeams} />
      <Teams teamsList={equaldTeams}/>
      <Footer/>
    </div>
  );
}

export default App;
