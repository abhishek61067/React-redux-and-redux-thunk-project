import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userType";

import axios from "axios";

// normal actionCreators
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    error: error,
  };
};

// async action creator

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fetchUsersSuccess(response));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error));
      });
  };
};

//export all const functions
export { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure, fetchUsers };
