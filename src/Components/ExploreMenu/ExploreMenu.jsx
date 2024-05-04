import React from "react";
import "./ExploreMenu.css";

import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setcategory }) => {
  return (
    <div>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our Menu</h1>
        <p className="explore-menu-text">
          Using the tip of your finger, select and personalize your favorite
          dish. discovering a wide variety of meals from many restaurants, and
          it will be worthwhile to try them all.
        </p>
        <div className="explore-menu-list">
          {menu_list.map((e, index) => {
            return (
              <div
                onClick={() =>
                  setcategory((prev) =>
                    prev === e.menu_name ? "All" : e.menu_name
                  )
                }
                key={index}
                className="explore-menu-list-item"
              >
                <img
                  className={category === e.menu_name ? "active" : ""}
                  src={e.menu_image}
                  alt="image"
                />
                <p>{e.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ExploreMenu;
