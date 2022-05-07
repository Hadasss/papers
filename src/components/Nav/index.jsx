import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Nav(props) {
  const { categories = [], currentCategory } = props;

  return (
    <nav>
      <ul className="menu">
        {categories.map((category) => (
          <li
            className={`borderized ${
              currentCategory.name === category.name && "navActive"
            }`}
            key={category.name}
          >
            <a
              onClick={() => props.handleChange(category.name)}
              href={category.href}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
