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
    <div className="text-center" style={{ width: "25%", margin: "auto" }}>
      <br />
      <h1>Sign in</h1>

      <form
        className="form-signin"
        onSubmit={(e) => submitCredentials(e, username, password)}
      >
        <input
          className="form-control"
          placeholder="Username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="form-control"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit" className="btn btn-lg btn-primary btn-block">
          Sign in
        </button>
      </form>
      <br />

      {props.loginInProgress && <p>Signing in...</p>}
      {props.loginFailed && !props.loginInProgress && (
        <p className="text-danger">Incorrect credentials.</p>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
