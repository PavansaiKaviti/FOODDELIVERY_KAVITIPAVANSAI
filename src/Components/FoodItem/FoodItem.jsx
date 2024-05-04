import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContex";

const FoodItem = ({ id, name, description, price, image }) => {
  const { addtocart, removeFromCart, cartItems, setCartItems } =
    useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="image" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addtocart(id)}
            src={assets.add_icon_white}
            alt="add"
          />
        ) : (
          <div className="food-item-container">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addtocart(id)}
              src={assets.add_icon_green}
            ></img>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="image" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};
export default FoodItem;
