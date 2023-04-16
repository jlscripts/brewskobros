import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartIem from "./CartItem";
import Checkout from "./Checkout";
import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toLocaleString()}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes.cartItems}>
      {cartCtx.items.map((item) => (
        <CartIem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onAddItem={cartCtx.addItem.bind(null, item)}
          onRemoveItem={cartCtx.removeItem.bind(null, item.id)}
        ></CartIem>
      ))}
    </ul>
  );

  const openCheckoutHandler = () => {
    setIsCheckout(true);
  };

  const checkoutHandler = () => {
    console.log("click");
  };

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <h2 className={classes.header}>Your shopping cart</h2>
      <div className={classes.cartItemsAndCheckOutContainer}>
        {cartItems}
        <div className={classes.totalAmountContainer}>
          <p>Total:</p>
          <p>{totalAmount}</p>
        </div>
        {isCheckout && <Checkout></Checkout>}
      </div>
      <div className={classes.btnContainer}>
        {!isCheckout && (
          <button
            className={`${classes.cancelBtn} ${classes.btn}`}
            onClick={props.onCloseCart}
          >
            Cancel
          </button>
        )}
        {hasItems && !isCheckout && (
          <button
            className={`${classes.orderBtn} ${classes.btn}`}
            onClick={openCheckoutHandler}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
