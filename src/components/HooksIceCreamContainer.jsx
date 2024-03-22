import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import buyIceCream from "../redux/ice-cream/iceCreamAction";

const HooksIceCreamContainer = () => {
  const dispatch = useDispatch();
  const numOfIceCream = useSelector((state) => {
    console.log("state: ", state);
    return state.iceCream.numOfIceCream;
  });
  return (
    <div>
      <h1>No of icecream - {numOfIceCream}</h1>
      <button
        onClick={() => {
          dispatch(buyIceCream());
        }}
      >
        Buy Icecream
      </button>
    </div>
  );
};

export default HooksIceCreamContainer;
