export const loginFailed = () => {
  return {
    type: "LOGIN_FAILED",
  };
};

export const loginSucceeded = () => {
  return {
    type: "LOGIN_SUCCEEDED",
  };
};

export const loginInProgress = () => {
  return {
    type: "LOGIN_IN_PROGRESS",
  };
};
