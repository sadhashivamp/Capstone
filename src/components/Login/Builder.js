import React from "react";
import Loginlogo from "./Loginlogo.jpg";
import { NavLink } from "react-router-dom";

const Builder = () => {
  return (
    <div>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image-text">
              <figure>
                <img className="signin-image" src={Loginlogo} alt="login pic" />
              </figure>
              <NavLink to="/signup" className="login-image-link">
                Create an account
              </NavLink>
            </div>

            <div className="Signin-form">
              <h2 className="form-title">
                Sign In <h5>For Builder</h5>
              </h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email zmdi-hc-2x"></i>
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
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock zmdi-hc-2x" size="medium"></i>
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

                <div className="form-group form-button">
                  <NavLink to="/builderdashboard" className="">
                    <button type="button" class="btn btn-outline-success">
                      Signin
                    </button>
                  </NavLink>
                  <NavLink to="/" className="F-p">
                    Forget Password
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Builder;
