const API_URL = process.env.REACT_APP_API_URL;

export const postNewUser = (newUserData) => {
  return fetch(`${API_URL}/v1/users/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(newUserData),
  }).then((res) => res.json());
};
