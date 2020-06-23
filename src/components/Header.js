import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <React.Fragment>
      <ul className="header">
        <li>
          <a href="#home" style={{ color: "#ffffff" }}>
            Home
          </a>
        </li>
        <li>
          <a href="#experience" style={{ color: "#c1a57b" }}>
            Tapasztalat
          </a>
        </li>
        <li>
          <a href="#projects" style={{ color: "#c1a57b" }}>
            Projektek
          </a>
        </li>
        <li>
          <a style={{ color: "#c1a57b" }} href="index.html">
            Ismeretek
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;
