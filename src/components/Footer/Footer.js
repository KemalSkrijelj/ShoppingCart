import React from "react";
import "./Footer.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h1 style={{ fontSize: "30px", marginLeft: "50px" }}>ShoppingCart ©</h1>
        <div class="icons-footer">
          <i className="icons" style={{ color: "#ffffff" }}>
            <FaGithub />
          </i>
          <i className="icons" style={{ color: "#ffffff" }}>
            <FaLinkedin />
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
