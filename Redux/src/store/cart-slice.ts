import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // when there is an action with a payload use type PayloadAction
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>,
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(
      state,
      action: PayloadAction<string>, // id
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
        console.log("result: ", state.items.slice(itemIndex, 1))
      } else {
        state.items[itemIndex].quantity--;
      }
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions


