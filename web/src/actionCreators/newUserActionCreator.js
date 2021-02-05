// import function from api to create new users

const newUserRequestFailed = () => {
  return {
    type: "NEW_USER_REQUEST_FAILED",
  };
};

const newUserRequestSucceeded = () => {
  return {
    type: "NEW_USER_REQUEST_SUCCEEDED",
  };
};

const newUserRequestInProgress = () => {
  return {
    type: "NEW_USER_REQUEST_IN_PROGRESS",
  };
};

export const createNewUser = (newUserData) => {
  return async (dispatch) => {
    try {
      dispatch(newUserRequestInProgress());
      await (() => {}); // use the imported api function
      dispatch(newUserRequestSucceeded());
    } catch (error) {
      console.error(error);
      dispatch(newUserRequestFailed());
    }
  };
};
