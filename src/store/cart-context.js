import React from "react";

const CartCtx = React.createContext({
  items: [],
  totalNumberOfItems: 0,
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartCtx;
