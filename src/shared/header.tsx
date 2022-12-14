import { NavLink } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <NavLink to="/"><img src="../assets/logo.png" /></NavLink>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/event/1">Event</NavLink>
      </div>
    </nav >
  );
}

export default Header;
