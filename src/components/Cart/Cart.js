import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartIem from "./CartItem";
import Checkout from "./Checkout";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
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

  const onCheckoutHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://brewskobros-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartModalContent = (
    <React.Fragment>
      <h2 className={classes.header}>Your shopping cart</h2>
      <div className={classes.cartItemsAndCheckOutContainer}>
        {cartItems}
        <div className={classes.totalAmountContainer}>
          <p>Total:</p>
          <p>{totalAmount}</p>
        </div>
        {isCheckout && (
          <Checkout
            onCloseCart={props.onCloseCart}
            onCheckout={onCheckoutHandler}
          ></Checkout>
        )}
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
    </React.Fragment>
  );

  const orderSubmittingContent = (
    <p className={classes.processingContent}>Processing your order...</p>
  );

  const orderSubmittedContent = (
    <div className={classes.orderSubmitted}>
      <h2>Your order has been received</h2>
      <p>Thank you for your purchase!</p>
      <Button className={classes.continueBtn} onClick={props.onCloseCart}>
        Continue browsing
      </Button>
    </div>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && orderSubmittingContent}
      {!isSubmitting && didSubmit && orderSubmittedContent}
    </Modal>
  );
};

export default Cart;
