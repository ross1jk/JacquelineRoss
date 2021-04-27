import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} >
        Home
      </Link>

      <Link
        to="/about"
        className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
        About
      </Link>

      <Link
        to="/portfolio"
        className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
        Portfolio
      </Link>

      <Link
        to="/contact"
        className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
        Contact
      </Link>
      
    </nav>
  );
}

export default Navbar;

