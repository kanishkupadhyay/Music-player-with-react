import React from "react";
import {Link,NavLink } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mx-2" href="#">
          {props.headerTitle}
        </a>
        <button
          className="navbar-toggler me-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse justify-content-end navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-4 mr-auto">
            <li className="nav-item">
              <NavLink  className="nav-link" to="/">
                Songs
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
