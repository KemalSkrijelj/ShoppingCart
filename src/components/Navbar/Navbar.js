import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../Navbar/shopping-logo.svg";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
 <header>
      <div className="wrapper">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navlink-active" : "navlink-not-active"
          }
        >
          <div className="logo">
            <img src={logo} alt="" className="shopping-logo" />
          </div>
        </NavLink>
        <div className="listing">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-not-active"
            }
          >
            <li>Products</li>
          </NavLink>
          <NavLink
            to="/outlet"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-not-active"
            }
          >
            <li>Outlet</li>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-not-active"
            }
          >
            <li>
              <FaShoppingCart className="icon" />
            </li>
          </NavLink>
        </div>
      </div>
    </header>
    </>
  );
};

export default Navbar;
