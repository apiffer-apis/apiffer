import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
function layout() {
  return (
    <div className='h-screen'>
       <div className="nav hi-5">
        <Navbar/>
       </div>
       <div className="body hi-95 relative">
        <Outlet/>
       </div>
    </div>
    // <div class="grid grid-row-6 gap-4 h-screen">
    //   <div className="nav row-span-1 bg-black">
    //     <Navbar />
    //   </div>
    //   <div className="body row-span-5">
    //     <Outlet />
    //   </div>
    // </div>
  );
}

export default layout;
