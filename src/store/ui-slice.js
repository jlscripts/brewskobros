import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
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

export const uiActions = uiSlice.actions;

export default uiSlice;
