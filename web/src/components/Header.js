import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  eraseToken,
  logoutUser,
} from "../actionCreators/userAuthActionCreator";

const mapDispatchToProps = (dispatch) => ({
  eraseToken: () => dispatch(eraseToken()),
  logoutUser: () => dispatch(logoutUser()),
});

const mapStateToProps = (state) => ({
  userIsLoggedIn: state.userAuth.isLoggedIn,
});

const Header = (props) => {
  const logout = () => {
    props.eraseToken();
    props.logoutUser();
  };

  return (
    <div className="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
      <Link className="navbar-brand" to="/">
        <h1 className="text-light">Bookly.com</h1>
      </Link>

      {props.userIsLoggedIn && (
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/summary">
                <p>Summary</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/addUser">
                <p>Add User</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/allUsers">
                <p>Show All Users</p>
              </Link>
            </li>
          </ul>

          <button className="btn btn-warning" onClick={() => logout()}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
