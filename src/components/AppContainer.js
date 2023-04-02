import Header from "./Header/Header";
import Home from "./Layout/Home";
import Menu from "./Layout/Menu";

import classes from "./AppContainer.module.css";
import React, { useEffect, useState } from "react";

const AppContainer = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuIsActive, setMenuIsActive] = useState(false);

  const onNavigateHandler = (activateSection) => {
    if (activateSection !== "menu") setMenuIsActive(false);
    setActiveSection(activateSection);
  };

  const onShowMenuHandler = () => {
    setMenuIsActive(true);
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <Header
          onNavigate={onNavigateHandler}
          onShowMenu={menuIsActive}
        ></Header>
        {activeSection === "home" ? (
          <Home onShowMenu={onShowMenuHandler}></Home>
        ) : (
          ""
        )}
        {activeSection === "menu" ? <Menu></Menu> : ""}
        {/* <About></About> */}
        {/* <ContactUs></ContactUs> */}
      </div>
    </React.Fragment>
  );
};

export default AppContainer;
