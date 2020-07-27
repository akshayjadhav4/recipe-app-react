import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Typography } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <nav className="header_nav">
        <Link to="/" className="header__link">
          <span className="header__logo">Cookz</span>
        </Link>
        <Typography color="textPrimary" className="header_msg" variant='h5'>
          It's time to eat! What would you like?
        </Typography>
      </nav>
    </div>
  );
}

export default Header;
