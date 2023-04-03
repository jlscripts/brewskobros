import { useContext } from "react";

import CartContext from "../../store/cart-context";
import Button from "../UI/Button";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const onAddToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
    });
  };

  return (
    <li className={classes.container}>
      <div className={classes.photo}>PHOTO</div>
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
