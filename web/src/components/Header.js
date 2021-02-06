import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
      <Link to="/">
        <h1 className="text-light">Bookly.com</h1>
      </Link>
    </div>
  );
};

export default Header;
