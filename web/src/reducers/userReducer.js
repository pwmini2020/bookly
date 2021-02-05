const initialState = { isLoggedIn: false };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TOKEN": {
      return {
        ...state,
        token: action.payload.token,
      };
    }

    case "ERASE_TOKEN": {
      return {
        ...state,
        token: "",
      };
    }

    case "LOGIN_SUCCEEDED": {
      return {
        ...state,
        isLoggedIn: true,
      };
    }

    case "LOGOUT":
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
