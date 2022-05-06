import React, { useState } from "react";
import Nav from "../Nav";
import cactus from "../../images/icons8-cactus-48.png";

function Header(props) {
  const [categories] = useState([
    { name: "home", href: "/" },
    { name: "About", href: "#about-me" },
    { name: "Projects", href: "#projects" },
    { name: "work", href: "#work-experience" },
    { name: "contact", href: "#contact" },
  ]);

  // const [currentPage, setCurrentPage] = useState("Home")

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="header">
      <a href="./index.html">
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

// I tried to use props and useState but I'm definitlt ohhhh not using it right so can you explain that?
