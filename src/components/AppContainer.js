import { useSelector } from "react-redux";

import Header from "./Header/Header";
import Home from "./Layout/Home";
import Menu from "./Layout/Menu";
import AboutUs from "./Layout/AboutUs";
import Cart from "./Cart/Cart";

import classes from "./AppContainer.module.css";

const AppContainer = () => {
  const showSection = useSelector((state) => state.navigation.activeSection);
  const showCart = useSelector((state) => state.navigation.cartIsVisible);

  return (
    <div className={classes.container}>
      <Header />
      {showSection === "home" && <Home />}
      {showSection === "menu" && <Menu />}
      {showSection === "about us" && <AboutUs />}
      {showCart && <Cart />}
    </div>
  );
};

export default AppContainer;
