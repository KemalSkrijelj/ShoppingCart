import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../Navbar/shopping-logo.svg";
import { FaShoppingCart } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";
const Navbar = () => {
  const { productsInCart, productsInCartOutlet } = useContext(AppContext);
  const changingToNumber = Number(productsInCartOutlet);
  console.log(changingToNumber);
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
              <li style={{ position: "relative" }}>
                {productsInCart.length > 0 && (
                  <div className="numOfProducts">
                    <p className="numOfProductsLength">
                      {productsInCart.length + productsInCartOutlet.length}
                    </p>
                  </div>
                )}
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
