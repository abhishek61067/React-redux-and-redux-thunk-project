import { configureStore } from "@reduxjs/toolkit";
import buyCakeReducer from "./cake/cakeReducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: buyCakeReducer,
  middleware: (getDefaultMiddleware) => {
    return [logger];
  },
});

export default store;
