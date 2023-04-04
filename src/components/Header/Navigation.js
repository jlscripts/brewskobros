import { useEffect, useState } from "react";
import CartBtn from "../Cart/CartBtn";
import classes from "./Navigation.module.css";

const navigation = ["home", "menu", "about us"];

const Navigation = (props) => {
  const [activeSection, setActiveSection] = useState("home");

  const activateSectionHandler = (e) => {
    setActiveSection(e.target.textContent.toLowerCase());
  };

  useEffect(() => {
    props.onNavigate(activeSection);
  }, [activeSection]);

  useEffect(() => {
    if (props.onShowMenu === true) setActiveSection("menu");
  }, [props.onShowMenu]);

  const onClickHandler = () => {
    setActiveSection("cart");
  };

  return (
    <ul className={classes.navigation}>
      {navigation.map((section) => (
        <li>
          <a
            onClick={activateSectionHandler}
            className={`${classes.link} ${
              section === activeSection ? classes.selected : ""
            }`}
          >
            {section.toUpperCase()}
          </a>
        </li>
      ))}
      <li>
        <CartBtn onShowCart={props.onShowCart}></CartBtn>
      </li>
    </ul>
  );
};

export default Navigation;
