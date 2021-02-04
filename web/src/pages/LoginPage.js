import { connect } from "react-redux";
import { loginUser } from "../actionCreators/loggedUserActionCreator";

const mapDispatchToProps = (dispatch) => ({
  loginUser: (username, password) => dispatch(loginUser(username, password)),
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
    </div>
  );
};

export default connect(() => ({}), mapDispatchToProps)(LoginPage);
