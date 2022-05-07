import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Nav(props) {
  const { categories = [], currentCategory } = props;

  return (
    // <Navbar bg="light" expand="lg">
    //   <Container className="navigation">
    //     <Navbar.Brand href="#home">Home</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         {categories.map((category) => (
    //           <Nav.Link
    //             className={`borderized ${
    //               currentCategory.name === category.name && "navActive"
    //             }`}
    //             key={category.name}
    //             href={category.href}
    //           >
    //             {category.name}
    //           </Nav.Link>
    //         ))}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <nav className="navigation">
      <ul className="menu">
        {categories.map((category) => (
          <li
            className={`borderized col-xs={6} ${
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
