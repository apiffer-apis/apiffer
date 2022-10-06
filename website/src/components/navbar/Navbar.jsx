import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex justify-between items-center align-middle h-full">
      <ul>
        <NavLink to="/home">
          <li className="navitem py-2 inline mx-3 px-3  font-medium">Home</li>
        </NavLink>
        {/* <NavLink to="/explore"><li className="item p-1 inline mx-3 font-medium">Explore</li></NavLink> */}
      </ul>
      <ul>
        <NavLink to="/dashboard">
          <li className="navitem active py-2 px-3 inline mx-3 font-medium">
            Dashboard
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
