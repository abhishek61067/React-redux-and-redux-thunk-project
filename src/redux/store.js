import buyCakeReducer from "./cake/cakeReducer";
import buyIceCreamReducer from "./ice-cream/iceCreamReducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { usersReducer } from "./users/usersReducer";

const store = configureStore({
  reducer: {
    cake: buyCakeReducer,
    iceCream: buyIceCreamReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
