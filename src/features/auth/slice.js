import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
