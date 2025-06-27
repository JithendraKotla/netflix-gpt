// src/utils/userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

// ✅ Correct named exports
export const { addUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
