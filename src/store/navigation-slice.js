import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: { activeSection: "home" },
  reducers: {
    navigateTo(state, action) {
      state.activeSection = action.payload;
    },
  },
});

export const navigationActions = navigationSlice.actions;

export default navigationSlice;
