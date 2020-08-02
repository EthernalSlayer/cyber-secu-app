import React from "react";
import { NavLink } from "react-router-dom";
import "../components/NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hello-world"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Hello World
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/red-pill"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Red Pill
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
