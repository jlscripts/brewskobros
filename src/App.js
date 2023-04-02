import React from "react";
import AppContainer from "./components/AppContainer";

import classes from "./App.module.css";

import background from "./assets/making-coffee.jpg";

function App() {
  return (
    <div className={classes.container}>
      <AppContainer></AppContainer>
      <img src={background} className={classes.background}></img>
    </div>
  );
}

export default App;
