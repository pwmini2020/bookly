const API_URL = process.env.REACT_APP_API_URL;

export const getAll = (token) => {
  return fetch(`${API_URL}/v1/bookings/`, {
    method: "GET",
    headers: {
      "Security-Token": token,
    },
  }).then((res) => res.json());
};

// NOT FINISHED
export const getFilteredBookings = (token, filterSettings) => {
  return fetch(`${API_URL}/v1/bookings?page=2`, {
    method: "GET",
    headers: {
      "Security-Token": token,
    },
  }).then((res) => res.json());
};
