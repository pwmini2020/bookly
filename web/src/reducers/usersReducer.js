const initialState = { fetchInProgress: false, users: [] };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_IN_PROGRESS": {
      return {
        ...state,
        fetchInProgress: true,
      };
    }

    case "FETCH_USERS_SUCCEDED": {
      return {
        ...state,
        fetchInProgress: false,
      };
    }

    case "FETCH_USERS_FAILED": {
      console.error(
        "ERROR (usersReducer reducer)",
        action.type,
        action.payload,
        action.meta
      );

      return {
        ...state,
        fetchInProgress: false,
        users: [],
      };
    }

    case "SAVE_FETCHED_USERS": {
      return {
        ...state,
        users: action.payload.users,
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
