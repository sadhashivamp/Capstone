import React from "react";
import { NavLink } from "react-router-dom";
import Signuplogo from "../images/Signuplogo.jpg";

const Signup = () => {
  return (
    <div>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="Signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account"></i>
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone"></i>
                  </label>
                  <input
                    className="input"
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    className="input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    className="input"
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="Confirm Your Password"
                    autoComplete="off"
                  />
                </div>

                <div className="form-group form-button">
                  <button type="button" class="btn btn-outline-success">
                    Signup
                  </button>
                </div>
              </form>
            </div>
            <div className="signup-image-text">
              <figure>
                <img
                  className="signup-image"
                  src={Signuplogo}
                  alt="registration pic"
                />
              </figure>
              <NavLink to="/user" className="signup-image-link">
                I am already register
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
