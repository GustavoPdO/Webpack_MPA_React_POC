import React from "react";
import "./navbar.scss";

const Navbar = (props) => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/">Application</a>
        </li>
        <li>
          <a href="/help">Help</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
