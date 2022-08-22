import React, { Suspense } from "react";
import {Routes,Route}  from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard";
import Createapi from "../pages/Createapi";
import Testapi from "../pages/Testapi";

// const Home = React.lazy(() => import("../pages/Home"));
// const Dashboard = React.lazy(() => import("../pages/Dashboard"));
// const Createapi = React.lazy(() => import("../pages/Createapi"));

function Mainroute() {
  return (
    <>
    <Suspense fallback={<div>Loading</div>}>
			</Suspense>
    <Routes>
        <Route path='' element={<Layout/>}>
            <Route path="" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/createapi" element={<Createapi/>}/>
            <Route path="/httptest" element={<Testapi/>}/>
        </Route>
    </Routes>
    </>
  )
}

export default Mainroute