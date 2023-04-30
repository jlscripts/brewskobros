import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: { activeSection: "home", cartIsVisible: false },
  reducers: {
    navigateTo(state, action) {
      state.activeSection = action.payload;
    },
    openCart(state) {
      state.cartIsVisible = true;
    },
    closeCart(state) {
      state.cartIsVisible = false;
    },
  },
});

export const navigationActions = navigationSlice.actions;

export default navigationSlice;
