import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { loginUser } from "../actionCreators/userAuthActionCreator";

const mapDispatchToProps = (dispatch) => ({
  loginUser: (username, password) => dispatch(loginUser(username, password)),
});

const mapStateToProps = (state) => ({
  loginFailed: state.loginPage.loginFailed,
  loginInProgress: state.loginPage.loginInProgress,
  userIsLoggedIn: state.userAuth.isLoggedIn,
});

const LoginPage = (props) => {
  const [username, setUsername] = useState("testUser");
  const [password, setPassword] = useState("test1234");

  // after a user logs in switch the page to /summary
  useEffect(() => {
    if (props.userIsLoggedIn) {
      props.history.push("/summary");
    }
  }, [props.userIsLoggedIn, props.history]);

  const submitCredentials = (e, username, password) => {
    e.preventDefault();
    props.loginUser(username, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <p>test username:password --- testUser:test1234</p>

      <form onSubmit={(e) => submitCredentials(e, username, password)}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <label htmlFor="username">Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <input type="submit" value="Login" />
      </form>
      {props.loginInProgress && <p>logging in...</p>}
      {props.loginFailed && <p>login failed</p>}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
