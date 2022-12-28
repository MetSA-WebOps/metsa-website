import { NavLink } from "react-router-dom";
import './style.css';
import eventlist from "../content/home.json"

function Header() {
  return (
    <nav className="header">
      <NavLink to="/" style={{ display: 'flex' }}><img src="src/assets/logo.png" className="logo" /></NavLink>
      <div className="nav-links">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="about" className="link">About Us</NavLink>
        <div className="nav-events">
          <p className="link" style={{ margin: 0, fontWeight: "400" }}>Events</p>
          <div className="event-links">
            {
              eventlist.events.map((event, i) => <NavLink to={`event/${i}`} className="link eve-link" style={{ marginLeft: "0" }}>{event.title}</NavLink>)
            }
          </div>
        </div>
        <NavLink to="/sponsors" className="link">Sponsors</NavLink>
        <NavLink to="/registration" className="link">Registration</NavLink>
        <NavLink to="/gallery" className="link">Gallery</NavLink>
      </div>
    </nav >
  );
}

export default Header;
