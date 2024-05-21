import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Oder your favourite food here</h2>
        <p>
          Using the tip of your finger, select and personalize your favorite
          dish. discovering a wide variety of meals from many restaurants, and
          it will be worthwhile to try them all.
        </p>
        <Link to="explore-menu">
          <button>View Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
