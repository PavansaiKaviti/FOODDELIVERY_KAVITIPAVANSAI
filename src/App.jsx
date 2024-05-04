import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PlaceOder from "./pages/PlaceOder/PlaceOder";
import Cart from "./pages/Cart/Cart";
import Footer from "./Components/footer/Footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";

const App = () => {
  const [showlogin, setshowlogin] = useState(false);
  return (
    <>
      {showlogin ? <LoginPopup setshowlogin={setshowlogin} /> : <></>}
      <div className="app">
        <Navbar setshowlogin={setshowlogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/PlaceOder" element={<PlaceOder />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
