import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
            euismod ante. Integer consequat purus id massa tempor posuere. Proin
            sed iaculis enim. Phasellus porta dolor id urna vehicula, tempus
            tincidunt turpis efficitur. Vivamus magna ligula, sagittis vitae
            arcu ac, molestie elementum arcu. Aenean eget mauris sed augue
            tempus tincidunt sit amet at lacus.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-(709)-(346)-448</li>
            <li>
              <Link to="mailto:kavitipavansai@gmail.com">
                kavitipavansai@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024@ Tomato.com -All Right Reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
