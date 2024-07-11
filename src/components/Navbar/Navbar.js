import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <NavLink to="/" className={"navlink"}>
            <h1>OnlineShop</h1>
          </NavLink>
        </div>
        <div className="buttons">
          <button className="on-sale">ON SALE</button>
          <button className="products">Products</button>
          <button className="icon-cart">
            <FaCartShopping />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
