import { authenticateCredentials } from "../api/loginApi";

const LoginPage = (props) => {
  const fakeUsername = "testUsername";
  const fakePassword = "testPass";
  return (
    <div>
      <h1>login page</h1>
      <button
        onClick={() => authenticateCredentials(fakeUsername, fakePassword)}
      >
        Login with fake credentials
      </button>
    </div>
  );
};

export default LoginPage;
