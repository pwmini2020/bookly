const API_URL = process.env.REACT_APP_API_URL;
const SECURITY_TOKEN = process.env.REACT_APP_SECRET_TOKEN;

export const getAll = (callback) => {
  fetch(`${API_URL}/v1/bookings/`, {
    method: "GET",
    headers: {
      "Security-Token": SECURITY_TOKEN,
    },
  })
    .then((res) => res.json())
    .then((json) => callback(json))
    .catch((e) => alert(e));
};
