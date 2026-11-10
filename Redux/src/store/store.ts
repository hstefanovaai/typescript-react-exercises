import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./cart-slice";

// what reducer is and then typescript manage the type
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// it is needed because of the typescript
export type AppDispatch = typeof store.dispatch;