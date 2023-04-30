import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      let updatedItems;
      const updatedTotalAmount = state.totalAmount + action.payload.price;

      //Identify if the item is already existing.
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      //If already existing, update it's quantity and override it's data
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        // If not existing, add it in the previous state
        updatedItems = state.items.concat(action.payload);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    },

    removeFromCart(state, action) {
      let updatedItems;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      const updatedTotalAmount = state.totalAmount - existingCartItem.price;

      if (existingCartItem.quantity === 1) {
        updatedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    },

    clearCart() {
      return initialState;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
