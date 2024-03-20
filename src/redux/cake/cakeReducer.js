import { BUY_CAKE } from "./cakeType";

// initializing initial state
const initialState = {
  numOfCake: 10,
};

const buyCakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};

export default buyCakeReducer;
