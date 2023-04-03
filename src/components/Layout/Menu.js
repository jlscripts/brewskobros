import AvailableProducts from "../Products/AvailableProducts";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <section className={classes.section}>
      <h1 className={classes.title}>Our menu</h1>
      <AvailableProducts></AvailableProducts>
    </section>
  );
};

export default Menu;
