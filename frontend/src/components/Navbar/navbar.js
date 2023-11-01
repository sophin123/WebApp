import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Consultant
          </NavLink>

          <ul onClick={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/partners"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Our Partners
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <IoMenu />
              </span>
            ) : (
              <span className="icon">
                <IoClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
