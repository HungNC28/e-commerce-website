import { createSlice } from "@reduxjs/toolkit";

const initialCateState = { category: "all" };

const cateSlice = createSlice({
  name: "category",
  initialState: initialCateState,
  reducers: {
    // hàm thay đổi category
    changeCate(state, action) {
      state.category = action.payload;
    },
  },
});

export const cateActions = cateSlice.actions;

export default cateSlice.reducer;
