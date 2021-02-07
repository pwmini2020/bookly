import { getUsers } from "../api/usersApi";

const fetchUsersInProgress = () => {
  return {
    type: "FETCH_USERS_IN_PROGRESS",
  };
};

const fetchUsersSucceeded = () => {
  return {
    type: "FETCH_USERS_SUCCEDED",
  };
};

const fetchUsersFailed = () => {
  return {
    type: "FETCH_USERS_FAILED",
    payload: new Error("failed to fetch users"),
    error: true,
  };
};

const saveUsers = (users) => {
  return {
    type: "SAVE_FETCHED_USERS",
    payload: {
      users: users,
    },
  };
};

export const fetchUsers = (token) => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersInProgress());
      const responseBody = await getUsers(token);
      dispatch(saveUsers(responseBody));
      dispatch(fetchUsersSucceeded());
    } catch (error) {
      console.error(error);
      dispatch(fetchUsersFailed());
    }
  };
};
