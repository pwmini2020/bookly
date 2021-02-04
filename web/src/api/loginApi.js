const bcrypt = require("bcryptjs");

const API_URL = process.env.REACT_APP_API_URL;
const SECURITY_TOKEN = process.env.REACT_APP_SECRET_TOKEN;

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
  fetch(`${API_URL}/v1/login`, {
    method: "POST",
    headers: {
      "Security-Token": SECURITY_TOKEN,
      "Content-Type": "application/json",
    },
    body: createCredentialsBody(login, password),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((e) => alert(e));
};
