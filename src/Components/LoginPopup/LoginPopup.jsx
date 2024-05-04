import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setshowlogin }) => {
  const [currState, setcurrState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => {
              setshowlogin((prev) => (prev = false));
            }}
            src={assets.cross_icon}
            alt="cross"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="name" required />
          )}

          <input type="email" placeholder="email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>{currState === "Sign Up" ? "create account" : " Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setcurrState("Sign Up")}> click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setcurrState("Login")}> Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
