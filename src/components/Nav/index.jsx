import React, { useState } from "react";

function Nav() {
  return (
    <nav className="navigation">
      <input type="checkbox" className="toggle-menu" />

      <div className="hamburger"></div>

      <ul className="menu">
        <li className="borderized">
          <a href="#about-me">About</a>
        </li>
        <li className="borderized">
          <a href="#projects">Projects</a>
        </li>
        <li className="borderized">
          <a href="#work-experience">Work</a>
        </li>
        <li className="borderized">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
