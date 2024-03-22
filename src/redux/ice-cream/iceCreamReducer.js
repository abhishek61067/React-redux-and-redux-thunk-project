import BUY_ICE_CREAM from "./iceCreamType";
const iceCreamInitialState = {
  numOfIceCream: 30,
};
const buyIceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default buyIceCreamReducer;
