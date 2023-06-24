import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    // Hàm login
    onLogin(state, action) {
      state.isAuthenticated = true;
      // lưu currentUser vào localStorage
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    // Hàm logout
    onLogout(state) {
      state.isAuthenticated = false;
      // xóa currentUser
      localStorage.removeItem("currentUser");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
