import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem } from "@material-ui/core";
import logo from "../assets/logo.png";

export const Header = () => {
  const [anchorEL, setAnchorEL] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEL(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEL(null);
  };
  return (
    <div>
      <header className="header">
        <div>
          <img src={logo} alt="" />
          <Button className="links">
            <Link className="links-text" to="/home">
              Home
            </Link>
          </Button>
        </div>

        <nav className="navbar">
          <ul>
            <Button
              className="links"
              aria-controls="menu"
              onClick={handleOpenMenu}
              type="submit"
            >
              <Link className="links-text" to="/signup">
                Log In
              </Link>
            </Button>
            <Button className="links" aria-controls="menu" type="submit">
              <Link className="links-text" to="/signup">
                Register
              </Link>
            </Button>
          </ul>
          <Menu
            style={{ marginTop: "-300px", marginLeft: "1300px", type: "dark" }}
            id="menu"
            onClose={handleOpenMenu}
            anchorEL={anchorEL}
            open={Boolean(anchorEL)}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link className="links" to="/user">
                User
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link className="links" to="/builder">
                Builder
              </Link>
            </MenuItem>
          </Menu>
        </nav>
      </header>
    </div>
  );
};
