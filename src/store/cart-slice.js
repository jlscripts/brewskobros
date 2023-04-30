import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartIsVisible: false },
  reducers: {
    openCart(state) {
      state.cartIsVisible = true;
    },
    closeCart(state) {
      state.cartIsVisible = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
