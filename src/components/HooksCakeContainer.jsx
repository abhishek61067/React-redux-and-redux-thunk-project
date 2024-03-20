import React from "react";
import { connect } from "react-redux";
import buyCake from "../redux/cake/cakeAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const HooksCakeContainer = () => {
  const dispatch = useDispatch();
  const numOfCake = useSelector((state) => state.numOfCake);
  return (
    <div>
      <h1>No of cakes - {numOfCake}</h1>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        Buy Cake
      </button>
    </div>
  );
};

export default HooksCakeContainer;
