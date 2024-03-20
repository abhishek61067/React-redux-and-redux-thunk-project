import { configureStore } from "@reduxjs/toolkit";
import buyCakeReducer from "./cake/cakeReducer";

const store = configureStore({
  reducer: buyCakeReducer,
});

export default store;
