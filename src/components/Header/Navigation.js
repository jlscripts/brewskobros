import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import CartBtn from "../Cart/CartBtn";
import CartContext from "../../store/cart-context";
import { navigationActions } from "../../store/navigation-slice";

import classes from "./Navigation.module.css";

const navigation = ["home", "menu", "about us"];

const Navigation = (props) => {
  const dispatch = useDispatch();

  const [activeSection, setActiveSection] = useState("home");
  const [bumpEffect, setBumpEffect] = useState(false);
  const cartCtx = useContext(CartContext);

  const activateSectionHandler = (e) => {
    const clickedSection = e.target.textContent.toLowerCase();
    dispatch(navigationActions.navigateTo(clickedSection));

    setActiveSection(e.target.textContent.toLowerCase());
  };

  const showCartHandler = () => {
    dispatch(navigationActions.openCart());
  };

  useEffect(() => {
    if (props.onShowMenu === true) setActiveSection("menu");
  }, [props.onShowMenu]);

  const numberOfCartItems = cartCtx.items.reduce((curValue, item) => {
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
