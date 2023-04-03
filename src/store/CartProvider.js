import React, { useReducer } from "react";

import CartCtx from "./cart-context";

const defaultCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    const updatedTotalQuantity = ++state.totalQuantity;
    const updatedTotalAmount = state.totalAmount + action.item.price;

    //Identify if the item is already existing.
    const existingCartItemIndex = state.items.findIndex(
      (item) => action.item.id === item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    //If already existing, update it's quantity and override it's data
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItem] = updatedItem;
    } else {
      // If not existing, add it in the previous state
      updatedItems = state.items.concat(action.item);
    }
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return <CartCtx value={cartContext}>{props.children}</CartCtx>;
};

export default CartProvider;
