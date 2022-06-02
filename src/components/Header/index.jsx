import React, { useState } from "react";
import Nav from "../Nav";
import cactus from "../../images/icons8-cactus-48.png";

function Header(props) {
  const [categories] = useState([
    { name: "About", href: "#about-me" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    // { name: "Contact", href: "#contact" },
  ]);

  return (
    <div className="header">
      <a href="#home">
        <img
          className="cactus"
          src={cactus}
          alt="cactus icon"
          onClick={() => props.handleChange("Home")}
        />
      </a>
      <Nav
        categories={categories}
        currentPage={props.currentPage}
        handleChange={props.handleChange}
      ></Nav>
    </div>
  );
}

export default Header;
