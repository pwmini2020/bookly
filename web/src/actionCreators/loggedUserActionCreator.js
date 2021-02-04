import { authenticateCredentials } from "../api/loginApi";

export const saveToken = (token) => {
  return {
    type: "SAVE_TOKEN",
    payload: {
      token: token,
    },
  };
};

export const loginUser = (login, password) => {
  return async (dispatch) => {
    try {
      const response = await authenticateCredentials(login, password);
      dispatch(saveToken(response.token));
      // route to summary
    } catch (error) {
      console.error(error);
      // display info that login failed
    }
  };
};
