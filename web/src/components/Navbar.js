import { Link } from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = (props) => {
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
    </div>
  );
};

export default Navbar;
