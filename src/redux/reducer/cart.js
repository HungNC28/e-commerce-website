import { createSlice, current } from "@reduxjs/toolkit";
import { getDataLocal } from "../../shared/utils";
import { getEmailCurrentUser } from "../../shared/utils";

const initialListCartState = { cart: [...getDataLocal("cart")] };
const listCartSlice = createSlice({
  name: "cart",
  initialState: initialListCartState,
  reducers: {
    // Hàm add Cart
    addCart(state, action) {
      localStorage.setItem(
        "cart",
        JSON.stringify([...state.cart, action.payload])
      );
      state.cart = [...state.cart, action.payload];
    },
    // Hàm update Cart
    updateCart(state, action) {
      const { id, quantity } = action.payload;
      // dùng map để lấy ra sản phẩm có cùng id r update lại quantity
      const cartNew = [...state.cart];
      const currentNew = cartNew.map((c) => {
        if (c._id["$oid"] === id) c.quantity = quantity;
        return c;
      });

      //set lại cart local
      localStorage.setItem("cart", JSON.stringify(currentNew));
    },
    // Hàm delete Cart
    deleteCart(state, action) {
      const id = action.payload._id["$oid"];

      state.cart = state.cart.filter((c) => {
        const itemId = c._id["$oid"];
        return (
          // dùng filter lọc ra các phần tử khác id và cùng user
          (itemId !== id && c.email === getEmailCurrentUser()) ||
          // // dùng filter lọc ra các phần tử cùng id và khác user
          (itemId === id && c.email !== getEmailCurrentUser())
        );
      });

      //set lại cart local
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const listCartActions = listCartSlice.actions;

export default listCartSlice.reducer;
