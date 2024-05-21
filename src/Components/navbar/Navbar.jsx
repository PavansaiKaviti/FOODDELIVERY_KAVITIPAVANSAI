import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContex";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ setshowlogin }) => {
  const [menu, setmenu] = useState("");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to="/">
          <li
            className={menu === "home" ? "active" : ""}
            onClick={() => {
              setmenu("home");
            }}
          >
            home
          </li>
        </Link>
        <ScrollLink to="explore-menu" smooth={true} duration={500}>
          <li
            className={menu === "menu" ? "active" : ""}
            onClick={() => {
              setmenu("menu");
            }}
          >
            <Link to="/">menu</Link>
          </li>
        </ScrollLink>
        <ScrollLink to="app-download" smooth={true} duration={500}>
          <li
            className={menu === "mobile-app" ? "active" : ""}
            onClick={() => {
              setmenu("mobile-app");
            }}
          >
            <Link to="/">mobile-app</Link>
          </li>
        </ScrollLink>
        <ScrollLink to="footer" smooth={true} duration={500}>
          <li
            className={menu === "contact-us" ? "active" : ""}
            onClick={() => {
              setmenu((prev) => (prev = "contact-us"));
            }}
          >
            contact-us
          </li>
        </ScrollLink>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search_icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>
          {getTotalCartAmount() > 0 ? <div className="dot"></div> : <></>}
        </div>
        <button onClick={() => setshowlogin((prev) => (prev = true))}>
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
