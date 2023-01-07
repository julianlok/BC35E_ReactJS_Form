import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container px-lg-5">
          <a className="navbar-brand" href="/">
            Start Bootstrap
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  to="/baitapForm"
                >
                  Form
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  to="/baitapForm"
                >
                  BaitapForm
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
