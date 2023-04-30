import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

import classes from "./ProductItem.module.css";

import americano from "../../assets/americano.jpg";
import capuccino from "../../assets/capuccino.jpg";
import espresso from "../../assets/espresso.jpg";
import machiato from "../../assets/machiato.jpg";
import mocha from "../../assets/mocha.jpg";
import vanillalatte from "../../assets/vanilla-latte.jpg";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: props.id,
        name: props.name,
        price: props.price,
        quantity: 1,
      })
    );
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
      <button className={classes.addToCartBtn} onClick={addToCartHandler}>
        +
      </button>
    </li>
  );
};

export default ProductItem;
