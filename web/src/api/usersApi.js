const API_URL = process.env.REACT_APP_API_URL;

export const getUsers = (token, paginationSettings) => {
  const paramsString = `page=${paginationSettings.page}`;

  return fetch(`${API_URL}/v1/users?${paramsString}`, {
    method: "GET",
    headers: {
      "Security-Token": token,
    },
  })
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(`request failed (${res.status})`);
      }
      return res;
    })
    .then((res) => res.json());
};
