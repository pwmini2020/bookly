import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { eraseToken, logoutUser } from "../actionCreators/userActionCreator";

import "../styles/Navbar.css";

const mapDispatchToProps = (dispatch) => ({
  eraseToken: () => dispatch(eraseToken()),
  logoutUser: () => dispatch(logoutUser()),
});

const Navbar = (props) => {
  const logout = () => {
    props.eraseToken();
    props.logoutUser();
  };

  return (
    <div className="Navbar">
      <Link to="/summary">
        <p>Summary</p>
      </Link>

      <Link to="/addUser">
        <p>Add User</p>
      </Link>

      <Link to="/allUsers">
        <p>Show All Users</p>
      </Link>

      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default connect(() => ({}), mapDispatchToProps)(Navbar);
