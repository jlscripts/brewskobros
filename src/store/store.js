import { configureStore } from "@reduxjs/toolkit";

import navigationSlice from "./navigation-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { navigation: navigationSlice.reducer, cart: cartSlice.reducer },
});

export default store;
