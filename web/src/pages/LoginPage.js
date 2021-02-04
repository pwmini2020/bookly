import { connect } from "react-redux";
import { loginUser } from "../actionCreators/loggedUserActionCreator";

const mapDispatchToProps = (dispatch) => ({
  loginUser: (username, password) => dispatch(loginUser(username, password)),
});

const mapStateToProps = (state) => ({
  loginFailed: state.loginPage.loginFailed,
});

const LoginPage = (props) => {
  const fakeUsername = "testUser";
  const fakePassword = "test1234";

  return (
    <div>
      <h1>login page</h1>
      <button onClick={() => props.loginUser(fakeUsername, fakePassword)}>
        Login with fake credentials
      </button>
      {props.loginFailed ? <p>login failed</p> : <div></div>}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
