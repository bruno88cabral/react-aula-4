import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cards" activeClassName="active">
            Cards
          </NavLink>
        </li>
        <li>
          <NavLink to="/counter" activeClassName="active">
            Counter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
