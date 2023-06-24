import { configureStore } from "@reduxjs/toolkit";

import cateReducer from "./reducer/category";
import authReducer from "./reducer/auth";
import cartReducer from "./reducer/cart";

const store = configureStore({
  reducer: { category: cateReducer, auth: authReducer, cart: cartReducer },
});

export default store;
