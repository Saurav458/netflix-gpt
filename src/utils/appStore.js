import { configureStore } from "@reduxjs/toolkit";
import {userReducer,cartReducer} from "./userSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    cart:cartReducer
  },
});

export default appStore;
