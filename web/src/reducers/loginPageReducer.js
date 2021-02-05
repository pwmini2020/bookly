const initialState = { loginFailed: false, loginInProgress: false };

const loginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_IN_PROGRESS": {
      return {
        ...state,
        loginInProgress: true,
      };
    }

    case "LOGIN_SUCCEEDED": {
      return {
        ...state,
        loginFailed: false,
        loginInProgress: false,
      };
    }

    case "LOGIN_FAILED": {
      return {
        ...state,
        loginFailed: true,
        loginInProgress: false,
      };
    }

    default:
      return state;
  }
};

export default loginPageReducer;
