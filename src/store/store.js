import { configureStore, createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: "home",
  reducers: {
    navigateTo(state, action) {
      state = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { navigation: navigationSlice.actions },
});

export const navigationActions = navigationSlice.actions;

export default store;
