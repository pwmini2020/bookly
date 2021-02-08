const initialState = {
  requestFailed: false,
  requestInProgress: false,
  requestWasSent: false,
};

const newUserReducer = (state = initialState, action) => {
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
        requestWasSent: true,
      };
    }

    default:
      return state;
  }
};

export default newUserReducer;
