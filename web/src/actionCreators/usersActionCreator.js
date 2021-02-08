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

export const nextPageUsers = () => {
  return {
    type: "NEXT_PAGE_USERS",
  };
};

export const previousPageUsers = () => {
  return {
    type: "PREVIOUS_PAGE_USERS",
  };
};

const saveTotalPagesUsers = (totalPages) => {
  return {
    type: "SAVE_TOTAL_PAGES_USERS",
    payload: {
      totalPages: totalPages,
    },
  };
};

export const fetchUsers = (token, paginationSettings) => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersInProgress());
      const responseBody = await getUsers(token, paginationSettings);
      dispatch(saveUsers(responseBody.content));
      dispatch(saveTotalPagesUsers(responseBody.totalPages));
      dispatch(fetchUsersSucceeded());
    } catch (error) {
      console.error(error);
      dispatch(fetchUsersFailed());
    }
  };
};
