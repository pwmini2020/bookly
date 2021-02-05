const initialState = { requestFailed: false, requestInProgress: false };

const newUserReducer = (state = initialState, action) => {
  if (action.error) {
    console.error(
      "ERROR (newUserReducer reducer)",
      action.type,
      action.payload,
      action.meta
    );
    return state;
  }

  switch (action.type) {
    case "NEW_USER_REQUEST_SUCCEEDED": {
      return {
        ...state,
        requestFailed: false,
        requestInProgress: false,
      };
    }

    case "NEW_USER_REQUEST_FAILED": {
      return {
        ...state,
        requestFailed: true,
        requestInProgress: false,
      };
    }

    case "NEW_USER_REQUEST_IN_PROGRESS": {
      return {
        ...state,
        requestInProgress: true,
      };
    }

    default:
      return state;
  }
};

export default newUserReducer;
