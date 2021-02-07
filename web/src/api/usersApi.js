const API_URL = process.env.REACT_APP_API_URL;

// NOT FINISHED
export const getUsers = (token) => {
  return fetch(`${API_URL}/v1/users`, {
    method: "GET",
    headers: {
      "Security-Token": token,
    },
  }).then((res) => res.json());
};
