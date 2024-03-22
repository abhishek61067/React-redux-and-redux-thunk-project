import buyCakeReducer from "./cake/cakeReducer";
import buyIceCreamReducer from "./ice-cream/iceCreamReducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const store = configureStore({
  reducer: { cake: buyCakeReducer, iceCream: buyIceCreamReducer },
  middleware: () => {
    return [logger];
  },
});

export default store;
