import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartBtn from "../Cart/CartBtn";
import { uiActions } from "../../store/ui-slice";

import classes from "./Navigation.module.css";

const navigation = ["home", "menu", "about us"];

const Navigation = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [activeSection, setActiveSection] = useState("home");
  const [bumpEffect, setBumpEffect] = useState(false);

  const activateSectionHandler = (e) => {
    const clickedSection = e.target.textContent.toLowerCase();
    dispatch(uiActions.navigateTo(clickedSection));

    setActiveSection(e.target.textContent.toLowerCase());
  };

  const showCartHandler = () => {
    dispatch(uiActions.openCart());
    console.log("clicked");
  };

  useEffect(() => {
    if (props.onShowMenu === true) setActiveSection("menu");
  }, [props.onShowMenu]);

  const numberOfCartItems = cartItems.reduce((curValue, item) => {
    return curValue + item.quantity;
  }, 0);

  useEffect(() => {
    if (numberOfCartItems === 0) return;

    setBumpEffect(true);

    const timer = setTimeout(() => {
      setBumpEffect(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [numberOfCartItems]);

  return (
    <ul className={classes.navigation}>
      {navigation.map((section, index) => (
        <li key={index}>
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
        <CartBtn
          className={`${bumpEffect && classes.bump}`}
          onShowCart={showCartHandler}
        >
          {numberOfCartItems}
        </CartBtn>
      </li>
    </ul>
  );
};

export default Navigation;
