import React from "react";

import Navigation from "./Navigation";

import classes from "./Header.module.css";

const Header = (props) => {
  const onNavigateHandler = (activateSection) => {
    props.onNavigate(activateSection);
  };

  return (
    <div className={classes["header-container"]}>
      <div className={classes.logo}>
        <p>YOUR LOGO HERE</p>
      </div>
      <Navigation
        onNavigate={onNavigateHandler}
        onShowMenu={props.onShowMenu}
      ></Navigation>
    </div>
  );
};

export default Header;
