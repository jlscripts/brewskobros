import { useContext } from "react";

import CartIem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes.cartItems}>
      {cartCtx.items.map((item) => (
        <CartIem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
        ></CartIem>
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <h2 className={classes.header}>Your shopping cart</h2>
      {cartItems}
      <div className={classes.totalAmountContainer}>
        <p>Total:</p>
        <p>{totalAmount}</p>
      </div>
      <div className={classes.btnContainer}>
        <button
          className={`${classes.cancelBtn} ${classes.btn}`}
          onClick={props.onCloseCart}
        >
          Cancel
        </button>
        <button className={`${classes.orderBtn} ${classes.btn}`}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
