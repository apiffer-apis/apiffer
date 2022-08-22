import React from "react";
import { NavLink } from "react-router-dom";

import { RiDashboardLine } from "react-icons/ri";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import "./Sidenav.css";

import { MdHttp } from "react-icons/md";

function Sidenav() {
  return (
    <div className="flex flex-col ">
      <NavLink to="/dashboard">
        <div className="dash active p-1 side-item my-3 flex  justify-center flex-col items-center">
          <RiDashboardLine size={25} className="" />
          <p className="sidebar-menu-text p-0 m-0">Dashboard</p>
        </div>
      </NavLink>
      <NavLink to="/createapi">
        <div className="create p-1  side-item flex my-3 justify-center flex-col items-center">
          <VscGitPullRequestCreate size={25} className="" />
          <p className="sidebar-menu-text p-0 m-0">Create</p>
        </div>
      </NavLink>
      <NavLink to="/httptest">
        <div className="http p-1 side-item  flex my-3 justify-center flex-col items-center">
          <MdHttp size={25} className="" />
          <p className="sidebar-menu-text p-0 m-0">Test</p>
        </div>
      </NavLink>
    </div>
  );
}

export default Sidenav;
