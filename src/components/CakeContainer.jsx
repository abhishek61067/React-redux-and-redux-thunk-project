import React from "react";
import { connect } from "react-redux";
import buyCake from "../redux/cake/cakeAction";

const CakeContainer = (props) => {
  console.log("props: ", props);
  return (
    <div>
      <h1>No of cakes - {props.numOfCake}</h1>
      <button onClick={props.buyCakeHandler}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCake: state.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakeHandler: () => {
      dispatch(buyCake());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
