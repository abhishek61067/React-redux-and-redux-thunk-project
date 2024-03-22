import React from "react";

import buyIceCream from "../redux/ice-cream/iceCreamAction";
import { connect } from "react-redux";

const IceCreamContainer = (props) => {
  console.log("props from  iceCreamcontainer", props);
  return (
    <div>
      <h1>No of icecream - {props.numOfIceCream}</h1>
      <button
        onClick={() => {
          props.buyIceCreamHandler();
        }}
      >
        Buy Icecream
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state from mapStateToProps: ", state);
  return { numOfIceCream: state.iceCream.numOfIceCream };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCreamHandler: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
