import React from "react";

function Nav(props) {
  const { categories = [] } = props;

  return (
    <nav>
      <ul className="menu">
        {/* state: */}
        {categories.map((category) => (
          <li
            className={
              props.currentPage === category.name
                ? "borderized navActive"
                : "borderized"
            }
            key={category.name}
          >
            <a
              // setState:
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
