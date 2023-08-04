import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const handleHomeClick = () => {
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link" onClick={handleHomeClick}>
        Home
      </Link>
      <NavLink to="/login" className="nav-link" activeClassName="active">
        Login
      </NavLink>
      <NavLink to="/signup" className="nav-link" activeClassName="active">
        Signup
      </NavLink>
    </nav>
  );
};

export default Navbar;