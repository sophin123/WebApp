import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navigation-menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/partners">Our Partners</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
