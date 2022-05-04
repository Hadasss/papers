import React from "react";
import Nav from "../Nav";

function Header() {
  return (
    <div className="header">
      <a href="./index.html">
        <img
          className="cactus"
          src="../assets/images/icons8-cactus-48.png"
          alt="cactus icon"
        />
      </a>
      <Nav></Nav>
    </div>
  );
}

export default Header;
