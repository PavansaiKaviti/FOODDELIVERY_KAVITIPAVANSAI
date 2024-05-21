import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets, menu_list } from "../../assets/assets";
import { Link as RouterLink } from "react-router-dom";
import { StoreContext } from "../../context/StoreContex";
import { Link } from "react-scroll";
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
        <Link to="explore-menu" smooth={true} duration={500}>
          <li
            className={menu === "menu" ? "active" : ""}
            onClick={() => {
              setmenu("menu");
            }}
          >
            {/* <Link to="explore-menu" smooth={true} duration={500}>
            menu
          </Link> */}
            menu
          </li>
        </Link>
        <Link to="app-download" smooth={true} duration={500}>
          <li
            className={menu === "mobile-app" ? "active" : ""}
            onClick={() => {
              setmenu("mobile-app");
            }}
          >
            mobile-app
          </li>
        </Link>
        <Link to="footer" smooth={true} duration={500}>
          <li
            className={menu === "contact-us" ? "active" : ""}
            onClick={() => {
              setmenu((prev) => (prev = "contact-us"));
            }}
          >
            contact-us
          </li>
        </Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search_icon" />
        <div className="navbar-search-icon">
          <RouterLink to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </RouterLink>
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
