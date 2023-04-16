import americano from "../../assets/americano.jpg";
import capuccino from "../../assets/capuccino.jpg";
import espresso from "../../assets/espresso.jpg";
import machiato from "../../assets/machiato.jpg";
import mocha from "../../assets/mocha.jpg";
import vanillalatte from "../../assets/vanilla-latte.jpg";

import classes from "./CartItem.module.css";

const CartIem = (props) => {
  const images = {
    americano,
    capuccino,
    espresso,
    machiato,
    mocha,
    vanillalatte,
  };

  return (
    <li className={classes.item}>
      <div className={classes.imgContainer}>
        <img
          src={images[props.name.toLowerCase().replaceAll(/\s+/g, "")]}
          className={classes.image}
        ></img>
      </div>
      <div className={classes.productNameContainer}>
        <h3 className={classes.productName}>{props.name}</h3>
      </div>
      <div className={classes.quantityContainer}>
        <button className={classes.qtyBtn} onClick={props.onRemoveItem}>
          -
        </button>
        <p>{props.quantity}</p>
        <button className={classes.qtyBtn} onClick={props.onAddItem}>
          +
        </button>
      </div>
      <h3 className={classes.price}>₱{props.price}</h3>
    </li>
  );
};

export default CartIem;
