const loginPageReducer = (state = {}, action) => {
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
    case "LOGIN_FAILED": {
      return {
        ...state,
        loginFailed: true,
      };
    }

    case "LOGIN_SUCCEEDED": {
      return {
        ...state,
        loginFailed: false,
      };
    }

    default:
      return state;
  }
};

export default loginPageReducer;
