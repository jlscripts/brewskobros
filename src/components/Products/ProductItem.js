import { useContext } from "react";

import CartContext from "../../store/cart-context";
import Button from "../UI/Button";

import classes from "./ProductItem.module.css";

import americano from "../../assets/americano.jpg";
import capuccino from "../../assets/capuccino.jpg";
import espresso from "../../assets/espresso.jpg";
import machiato from "../../assets/machiato.jpg";
import mocha from "../../assets/mocha.jpg";
import vanillalatte from "../../assets/vanilla-latte.jpg";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const onAddToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: 1,
    });
  };

  const images = {
    americano,
    capuccino,
    espresso,
    machiato,
    mocha,
    vanillalatte,
  };

  return (
    <li className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          src={images[props.name.toLowerCase().replaceAll(/\s+/g, "")]}
          className={classes.image}
        ></img>
      </div>
      <div className={classes.productDetails}>
        <h1 className={classes.name}>{props.name}</h1>
        <i>{props.description}</i>
        <h1 className={classes.price}>{`₱${props.price}`}</h1>
      </div>
      <Button className={classes.button} onClick={onAddToCartHandler}>
        +
      </Button>
    </li>
  );
};

export default ProductItem;
