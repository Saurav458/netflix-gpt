import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
        return null;
    },
    errorUser:(state,action)=>{
        return action.payload
    }
  },
});
const cartSlice = createSlice({
  name: "cart",
  initialState: 20,
  reducers: {
    addUser1: (state, action) => {
      return action.payload;
    },
    removeUser1: (state, action) => {
        return null;
    },
    errorUser1:(state,action)=>{
        return action.payload
    }
  },
});

export const { addUser, removeUser, errorUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const { addUser1, removeUser1, errorUser1 } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

