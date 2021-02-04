const initialState = { isLoggedIn: false };

const userReducer = (state = initialState, action) => {
  if (action.error) {
    console.error(
      "ERROR (loggedUserReducer reducer)",
      action.type,
      action.payload,
      action.meta
    );
    return state;
  }

  switch (action.type) {
    case "SAVE_TOKEN": {
      return {
        ...state,
        token: action.payload.token,
      };
    }

    case "LOGIN_SUCCEEDED": {
      return {
        ...state,
        isLoggedIn: true,
      };
    }

    case "LOGIN_FAILED": {
      return {
        ...state,
        isLoggedIn: false,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
