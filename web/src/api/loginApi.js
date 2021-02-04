const bcrypt = require("bcryptjs");

const API_URL = process.env.REACT_APP_API_URL;

const getPasswordHash = (password) => {
  const rounds = 6;
  return bcrypt.hashSync(password, rounds);
};

const createCredentialsBody = (login, password) => {
  return JSON.stringify({
    login: login,
    password: getPasswordHash(password),
  });
};

export const authenticateCredentials = (login, password) => {
  return fetch(`${API_URL}/v1/login/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
    body: createCredentialsBody(login, password),
  }).then((res) => res.json());
};
