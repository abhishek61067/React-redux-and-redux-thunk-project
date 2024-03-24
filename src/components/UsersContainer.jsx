import React, { useEffect } from "react";

import { connect } from "react-redux";
import { fetchUsers } from "../redux/users/usersAction";

const UsersContainer = (props) => {
  console.log("props from user container: ", props);
  useEffect(() => {
    props.fetchUsersHandler();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {/* user name lists */}
      <div>
        {props.users.loading ? (
          <p>Loading...</p>
        ) : props.users.error ? (
          <p>{props.users.error}</p>
        ) : props.users.users.data?.length < 0 ? (
          <p>Data empty</p>
        ) : (
          props.users.users.data?.map((user) => <p>{user.name}</p>)
        )}
      </div>
    </div>
  );
};

// the state argument of mapStateToProps is returned by the createStore function which
// equals the argument passed in reducer property of createStore
const mapStateToProps = (state) => {
  console.log("state from mapStateToProps: ", state);
  return { users: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersHandler: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
