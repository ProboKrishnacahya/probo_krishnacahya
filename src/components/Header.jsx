import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark user-select-none py-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <strong className="pk">
              <span id="logo">PK</span>
            </strong>
          </NavLink>
          <button
            className="navbar-toggler collapsed border border-2 border-secondary bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <button
              type="button"
              className="btn-close btn-close-white p-2"
              aria-label="Close"
            ></button>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacts">
                  Contacts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/skills">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blogs">
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
