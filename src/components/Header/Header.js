import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../images/logos/logo-paw-cropped.png";
import InstagramIcon from "@mui/icons-material/Instagram";

function Header() {
  return (
    <div className="header-container">
      <div className="navbar">
        <img src={Logo} alt="Beartufting Logo" width={100} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        <a
          className="instagram-link"
          href="https://www.instagram.com/bear.tufting/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon /> Instagram
        </a>
      </div>
    </div>
  );
}

export default Header;
