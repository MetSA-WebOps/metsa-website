import { NavLink } from "react-router-dom";
import './style.css';

function Header() {
  return (
    <nav className="header">
      <NavLink to="/" style={{ display: 'flex' }}><img src="src/assets/logo.png" className="logo" /></NavLink>
      <div className="nav-links">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="about" className="link">About Us</NavLink>
        <NavLink to="event/1" className="link">Events</NavLink>
        <NavLink to="sponsors" className="link">Sponsors</NavLink>
        <NavLink to="registration" className="link">Registration</NavLink>
        <NavLink to="gallery" className="link">Gallery</NavLink>
      </div>
    </nav >
  );
}

export default Header;
