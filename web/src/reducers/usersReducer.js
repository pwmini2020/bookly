const initialState = {
  fetchInProgress: false,
  users: [],
  page: 0,
  totalPages: 0,
};

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

    case "NEXT_PAGE_USERS": {
      return {
        ...state,
        page: state.page + 1,
      };
    }

    case "PREVIOUS_PAGE_USERS": {
      return {
        ...state,
        page: state.page - 1,
      };
    }

    case "SAVE_TOTAL_PAGES_USERS": {
      return {
        ...state,
        totalPages: action.payload.totalPages,
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
