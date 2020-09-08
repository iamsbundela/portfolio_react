import React from "react";
import "./styles/Header.css";

function header() {
  return (
    <div className="header">
      <div className="header__logo">
        <h2>SB</h2>
      </div>
      <nav>
        <ul className="header__nav-links">
          {/* <li className="header__link">
            <a href="#home">Home</a>
          </li> */}
          <li className="header__link">
            <a href="#about">About</a>
          </li>
          <li className="header__link">
            <a href="#projects">Work</a>
          </li>
          <li className="header__link">
            <a href="#resume">Resume</a>
          </li>
          <li className="header__link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default header;
