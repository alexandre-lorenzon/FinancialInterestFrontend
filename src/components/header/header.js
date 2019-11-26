import React from "react";
import "../../index.css";

import { Navbar, Row } from "react-materialize";
import { NavLink } from "react-router-dom";

const Header = () => (
  <Row>
    <Navbar className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/juros">Juros compostos</NavLink>
    </Navbar>
  </Row>
);

export default Header;
