const API_URL = process.env.REACT_APP_API_URL;

export const getAll = (token) => {
  fetch(`${API_URL}/v1/bookings/`, {
    method: "GET",
    headers: {
      "Security-Token": token,
    },
  }).then((res) => res.json());
};
