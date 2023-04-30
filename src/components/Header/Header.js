import React from "react";

import Navigation from "./Navigation";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <div className={classes.logo}>
        <p>YOUR LOGO HERE</p>
      </div>
      <Navigation></Navigation>
    </div>
  );
};

export default Header;
