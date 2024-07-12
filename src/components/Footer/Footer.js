import React from "react";
import "./Footer.css";
import { FaInstagram,FaLetterboxd, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h1 style={{ fontSize: "30px", marginLeft: "50px" }}>ShoppingCart ©</h1>
        <div className="icons-footer">
          <i className="icons" style={{ color: "#ffffff" }}>
            <FaYoutube />
          </i>
          <i className="icons" style={{ color: "#ffffff" }}>
            <FaInstagram />
          </i>
        </div>
      </footer>
    </>
  );
};

export default Footer;
