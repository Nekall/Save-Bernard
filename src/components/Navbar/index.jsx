import "./style.scss";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/page-1">Page 1</Link>
    <Link to="/page-2">Page 2</Link>
  </nav>
);

export default Navbar;
