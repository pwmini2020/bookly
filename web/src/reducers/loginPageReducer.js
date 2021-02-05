const initialState = { loginFailed: false };

const loginPageReducer = (state = initialState, action) => {
  if (action.error) {
    console.error(
      "ERROR (loginPageReducer reducer)",
      action.type,
      action.payload,
      action.meta
    );
    return state;
  }

  switch (action.type) {
    case "LOGIN_SUCCEEDED": {
      return {
        ...state,
        loginFailed: false,
      };
    }

    case "LOGIN_FAILED": {
      return {
        ...state,
        loginFailed: true,
      };
    }

    default:
      return state;
  }
};

export default loginPageReducer;
