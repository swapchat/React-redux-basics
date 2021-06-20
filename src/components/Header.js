import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Contact Manager</h1>
      <nav>
        <NavLink to="/">Add contact</NavLink>
        <NavLink to="/list">Contacts list</NavLink>
      </nav>
    </header>
  );
};

export default Header;
