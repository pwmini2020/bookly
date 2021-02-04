import { Link } from "react-router-dom";

import "../styles/Header.css";

const Header = (props) => {
  return (
    <div className="Header">
      <Link to="/">
        <h1>Bookly.com</h1>
      </Link>
      <p>All your bookings in one place</p>
    </div>
  );
};

export default Header;
