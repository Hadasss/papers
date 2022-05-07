import React, { useState } from "react";
import Nav from "../Nav";
import cactus from "../../images/icons8-cactus-48.png";

function Header(props) {
  const [categories] = useState([
    { name: "About", href: "#about-me" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="header">
      <a href="#home">
        <img className="cactus" src={cactus} alt="cactus icon" />
      </a>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        handleChange={props.handleChange}
      ></Nav>
    </div>
  );
}

export default Header;
