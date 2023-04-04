import React, { useEffect, useState } from "react";

import Header from "./Header/Header";
import Home from "./Layout/Home";
import Menu from "./Layout/Menu";
import AboutUs from "./Layout/AboutUs";
import Cart from "./Cart/Cart";

import classes from "./AppContainer.module.css";

const AppContainer = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const onNavigateHandler = (activateSection) => {
    if (activateSection !== "menu") setMenuIsActive(false);
    setActiveSection(activateSection);
  };

  const onShowMenuHandler = () => {
    setMenuIsActive(true);
  };

  const onShowCartHandler = () => {
    setShowCart(true);
  };

  const onCloseCartHandler = () => {
    setShowCart(false);
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <Header
          onNavigate={onNavigateHandler}
          onShowMenu={menuIsActive}
          onShowCart={onShowCartHandler}
        ></Header>
        {activeSection === "home" && (
          <Home onShowMenu={onShowMenuHandler}></Home>
        )}
        {activeSection === "menu" && <Menu></Menu>}
        {activeSection === "about us" && <AboutUs></AboutUs>}
        {showCart && <Cart onCloseCart={onCloseCartHandler}></Cart>}
      </div>
    </React.Fragment>
  );
};

export default AppContainer;
