import React from "react";
import {NavLink} from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({isActive}) => (isActive ? styles.active : undefined)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({isActive}) => (isActive ? styles.active : undefined)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({isActive}) => (isActive ? styles.active : undefined)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
