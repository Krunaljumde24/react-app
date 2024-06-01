import React from "react";
import "./styles/sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar bg-dark text-light">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="text-decoration-none">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="text-decoration-none">
            Store
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="text-decoration-none">
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="text-decoration-none">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
