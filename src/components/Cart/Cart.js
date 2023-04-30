import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../UI/Modal";
import Checkout from "./Checkout";
import Button from "../UI/Button";
import CartItem from "./CartItem";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `$${cartTotalAmount.toLocaleString()}`;
  const hasItems = cartItems.length > 0;

  const addToCartHandler = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const removeFromCartHandler = (item) => {
    dispatch(cartActions.removeFromCart(item));
  };

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  const openCheckoutHandler = () => {
    setIsCheckout(true);
  };

  const continueHandler = () => {
    setDidSubmit(false);
    dispatch(uiActions.closeCart());
  };

  const closeCartHandler = () => {
    dispatch(uiActions.closeCart());
  };

  const onCheckoutHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://brewskobros-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartItems,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    clearCartHandler();
  };

  const listOfCartItems = (
    <ul className={classes.cartItems}>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onAddItem={addToCartHandler.bind(null, item)}
          onRemoveItem={removeFromCartHandler.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );

  const cartModalContent = (
    <React.Fragment>
      <h2 className={classes.header}>Your shopping cart</h2>
      <div className={classes.cartItemsAndCheckOutContainer}>
        {listOfCartItems}
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
            onClick={closeCartHandler}
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
      <Button className={classes.continueBtn} onClick={continueHandler}>
        Continue browsing
      </Button>
    </div>
  );

  return (
    <Modal>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && orderSubmittingContent}
      {!isSubmitting && didSubmit && orderSubmittedContent}
    </Modal>
  );
};

export default Cart;
