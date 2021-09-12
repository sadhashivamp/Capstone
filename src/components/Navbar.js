import React from "react";
import "./Navbar.css";

import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
// import { Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="cap-body">
      <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <NavLink className="navbar-brand" to="home">
          <img
            className="nav-img"
            src="https://s3.amazonaws.com/designmantic-logos/logos/2021/Sep/medium-7490-612f1ab76b900.png"
            alt=""
          />
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item active">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li> */}

            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/login"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <button type="button" class="btn btn-outline-success btn-lg">
                  Login
                </button>
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/user">
                  User
                </NavLink>
                <NavLink className="dropdown-item" to="/builder">
                  Builder
                </NavLink>
              </div>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                <button type="button" class="btn btn-outline-success btn-lg">
                  SignUp
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
