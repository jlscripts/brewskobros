import React from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import Home from "./components/Layout/Home";
import Menu from "./components/Layout/Menu";
import AboutUs from "./components/Layout/AboutUs";
import Cart from "./components/Cart/Cart";

import classes from "./App.module.css";

import background from "./assets/making-coffee.jpg";
function App() {
  const showSection = useSelector((state) => state.ui.activeSection);
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <div className={classes.container}>
      <div className={classes.sectionContainer}>
        <Header />
        {showSection === "home" && <Home />}
        {showSection === "menu" && <Menu />}
        {showSection === "about us" && <AboutUs />}
        {showCart && <Cart />}
      </div>
      <img src={background} className={classes.background}></img>
    </div>
  );
}

export default App;
