import { authenticateCredentials } from "../api/userApi";
import {
  loginFailed,
  loginSucceeded,
  loginInProgress,
} from "./loginPageActionCreator";

export const saveToken = (token) => {
  return {
    type: "SAVE_TOKEN",
    payload: {
      token: token,
    },
  };
};

export const eraseToken = () => {
  return {
    type: "ERASE_TOKEN",
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

export const loginUser = (login, password) => {
  return async (dispatch) => {
    try {
      dispatch(loginInProgress());
      const response = await authenticateCredentials(login, password);
      dispatch(saveToken(response.token));
      dispatch(loginSucceeded());
    } catch (error) {
      console.error(error);
      dispatch(loginFailed());
    }
  };
};
