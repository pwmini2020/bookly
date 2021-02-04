const loggedUserReducer = (state = {}, action) => {
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

    default:
      return state;
  }
};

export default loggedUserReducer;
